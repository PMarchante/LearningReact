import React from 'react';
import '../css/components.css';

const VideoItem = ({ passedVideo, onVideoSelect }) => {
  return (
    <div className='video-item item' onClick={() => onVideoSelect(passedVideo)}>
      <img
        className='ui image'
        src={passedVideo.snippet.thumbnails.medium.url}
      />
      <div className='content'>
        <div className='header'>{passedVideo.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
