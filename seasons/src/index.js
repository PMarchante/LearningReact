import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import LoadScreen from "./LoadScreen";
import "./css/SeasonDisplay.css";
class APP extends React.Component {
  //state initialization
  state = { lat: null, errorMsg: "" };

  //will execute one time put data loading stuff here
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      place => this.setState({ lat: place.coords.latitude }),
      err => this.setState({ errorMsg: err.message })
    );
  }
  renderContent() {
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    }

    if (!this.state.errorMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <LoadScreen msg={"Please accept location request"} />;
  }

  //will conditionally render the state depending on the info we have
  render() {
    return <div className='border-red'>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<APP />, document.querySelector("#root"));
