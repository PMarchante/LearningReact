import React from "react";
import "../css/ImageList.css";
import ImageCard from "./ImageCard";
const ImageList = props => {
  {
    /**
    we can destructure this so we arent always using image.blah blah
    const images = props.images.map(image => {
    return (
      <img alt={image.description} key={image.id} src={image.urls.regular} />
    );
  });
  return <div>{images}</div>;
}; */
  }
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className='image-list'>{images}</div>;
};

export default ImageList;
