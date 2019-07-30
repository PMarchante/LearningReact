import "./css/SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  Summer: {
    text: "Lets hit the beach",
    iconName: "sun"
  },
  Winter: {
    text: "burr, it is chilly",
    iconName: "snowflake"
  }
};

//this is like a normal method. we can name the parameters we pass anything we want
const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "Summer" : "Winter";
  } else {
    return latitude > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
