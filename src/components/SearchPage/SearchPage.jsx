import React, { useEffect, useState } from 'react';
import './SearchPage.scss';
import GetFeatured from 'components/GetFeatured';
import ReviewAndPhotos from 'components/ReviewAndPhotos';
import axios from 'api/axios';
import { useLocation } from 'react-router-dom';
import { getLocationData } from 'common/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setLocationInfo } from 'features/location/locationInfoSlice';
import { setSearchKey } from 'features/location/searchKeySlice';
import Loader from 'components/common/Loader';

const SearchPage = () => {
  let url = useLocation();
  const dispatch = useDispatch();
  const searchKey = useSelector((state) => state.searchKey);
  const locationInfo = useSelector((state) => state.locationInfo);
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleSetData = ([location], searchValue) => {
    if (!location.photos.length) return;

    const photos = location.photos[0].images;
    const locationName = searchKey || searchValue;

    handleSetLocation(location, photos[0]);
    if (!searchKey) dispatch(setSearchKey(searchValue));
    dispatch(
      setLocationInfo({
        [locationName]: {
          id: location.id,
          photos,
          name: location.name,
          description: location.description,
          type: location.type,
        },
      })
    );
  };

  const handleSetLocation = (location, photos) => {
    const { alternativeText = 'image', url = '', caption = '' } = photos;
    setLocation({
      alternativeText,
      caption,
      imageSrc: `${axios.defaults.baseURL}${url}`,
      ...location,
    });
  };

  useEffect(() => {
    const photos = locationInfo[searchKey]?.photos;
    if (photos?.length) {
      handleSetLocation(locationInfo[searchKey], photos[0]);
      setIsLoading(false);
      return;
    }
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
