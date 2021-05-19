import React from 'react'
import "./PhotoSection.scss";
import image from "../../resources/bg.jpg";

const PhotoSection = () => {

  const photos = [];

  for (let i = 0; i < 10; i++) {
    photos.push(
      <div className="photo__body--img">
        <img src={image} alt="unsplash" />
      </div>
    );

  }


  return (
    <div className="photo">
      <div className="photo__body">
        {photos}
      </div>
    </div>
  )
}

export default PhotoSection
