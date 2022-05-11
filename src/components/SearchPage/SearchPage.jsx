import React, { useEffect, useState } from 'react';
import './SearchPage.scss';
import GetFeatured from 'components/GetFeatured';
import ReviewAndPhotos from 'components/ReviewAndPhotos';
import axios from 'api/axios';
import { useLocation } from 'react-router-dom';
import { getLocationData } from 'common/utils';
import Loader from 'components/common/Loader';

const SearchPage = () => {
  let url = useLocation();
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleSetData = ([location]) => {
    const {
      alternativeText = 'image',
      url = '',
      caption = '',
    } = location ? location.photos[0].images[0] : {};

    setLocation({
      alternativeText,
      caption,
      imageSrc: `${axios.defaults.baseURL}${url}`,
      ...location,
    });
  };

  useEffect(() => {
    getLocationData({
      url,
      handleSetData,
      setIsLoading,
    });
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <div>
          <div className="searchPage">
            <div className="searchPage__info">
              <p>
                INDIA {'>'} Type : {location.type}
              </p>
              <h1 className="searchPage__info-name">{location.name}</h1>
              <p className="searchPage__info-description">
                {location.description}
              </p>
              <a
                href="#review-photo-section"
                className="searchPage__info-review"
              >
                Read reviews
              </a>
            </div>
            {location.photos && (
              <div className="searchPage__img">
                {location.imageSrc && (
                  <>
                    <img
                      src={location.imageSrc}
                      alt={location.alternativeText}
                    />
                    <p className="searchPage__img-caption">
                      {location.caption}
                    </p>
                  </>
                )}
              </div>
            )}
          </div>

          <GetFeatured />
          <div id="review-photo-section">
            <ReviewAndPhotos />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
