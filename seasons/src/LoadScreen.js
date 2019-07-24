import React from "react";

const LoadScreen = props => {
  return (
    <div className='ui active dimmer'>
      <div className='ui big text loader'>{props.msg}</div>
    </div>
  );
};

//this will supply a default value to the props we pass in
LoadScreen.defaultProps = {
  msg: "Loading..."
};

export default LoadScreen;
