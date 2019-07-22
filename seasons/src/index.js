import React from 'react';
import ReactDOM from 'react-dom';

class APP extends React.Component {
  constructor(props) {
    super(props);

    {
      /**the state object */
    }
    this.state = { Lat: null };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<APP />, document.querySelector('#root'));
