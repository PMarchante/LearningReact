import React from 'react';
import ReactDOM from 'react-dom';

class APP extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMsg: '' };

    //to update the state we MUST call the set state method
    //place is just the name we gave an object
    //place is a call back function, which means it will update when it finishes
    //getting what it does
  }

  //will execute one time put data loading stuff here
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (place) => {
        this.setState({ lat: place.coords.latitude });
      },
      (err) => this.setState({ errorMsg: err.message })
    );
  }

  //will conditionally render the state depending on the info we have
  render() {
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    }

    if (!this.state.errorMsg && this.state.lat) {
      return <div>latitude: {this.state.lat}</div>;
    }

    return <div>Loading</div>;
  }
}

ReactDOM.render(<APP />, document.querySelector('#root'));
