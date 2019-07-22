import React from 'react';
import ReactDOM from 'react-dom';

class APP extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };
    window.navigator.geolocation.getCurrentPosition(
      //to update the state we MUST call the set state method
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<APP />, document.querySelector('#root'));
