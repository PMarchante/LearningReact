import React from "react";
import VideoItem from "./VideoItem";

//we can destructure the prop and just get what we want. good in case we pass multiple things and
//only need one of them
const VideoList = ({ vids, onVideoSelect }) => {
  //the renderedList variable is iterating throught the array of videos we got
  //then we are returning an instance of VideoItem for each video on the list
  const renderedList = vids.map(oneVid => {
    return (
      <VideoItem
        key={oneVid.id.videoId}
        onVideoSelect={onVideoSelect}
        passedVideo={oneVid}
      />
    );
  });

  return <div className='ui relaxed divided list'>{renderedList}</div>;
};
export default VideoList;
