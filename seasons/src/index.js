import React from 'react';
import ReactDOM from 'react-dom';

const APP = () => {
  {
    /**the first position arguement is what to do if we succeed. the second is what to do if
    it fails */
  }
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return <div>working</div>;
};

ReactDOM.render(<APP />, document.querySelector('#root'));
