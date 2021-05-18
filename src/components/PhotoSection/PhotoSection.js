import React from 'react'
import "./PhotoSection.scss";

const PhotoSection = () => {

  const photos = [];

  for (let i = 0; i < 10; i++) {
    photos.push(<div className="photo__body--img"></div>);

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
