import React, { useState, useEffect } from 'react';
import './PhotoSection.scss';
import axios from 'api/axios';
import Loader from 'components/common/Loader';

const PhotoSection = ({ photos: photoProps = [] }) => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const splitPhotos = (images) => {
    const middleIndex = Math.ceil(images.length / 2);
    return {
      photosLeft: images.splice(0, middleIndex),
      photosRight: images.splice(-middleIndex),
    };
  };

  useEffect(() => {
    if (photoProps.length > 0) {
      setPhotos(splitPhotos([...photoProps]));
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="photo">
      {isLoading && <Loader />}
      {photos && (
        <div className="photo__body">
          <div className="photo__body-col">
            {photos.photosLeft.map((photo) => (
              <div className="photo__body--img" key={photo.id}>
                <img
                  src={`${axios.defaults.baseURL}${photo.url}`}
                  alt={photo.alternativeText}
                />
                <p className="photo__body--img-caption">{photo.caption}</p>
              </div>
            ))}
          </div>
          <div className="photo__body-col">
            {photos.photosRight.map((photo) => (
              <div className="photo__body--img" key={photo.id}>
                <img
                  src={`${axios.defaults.baseURL}${photo.url}`}
                  alt={photo.alternativeText}
                />
                <p className="photo__body--img-caption">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoSection;
