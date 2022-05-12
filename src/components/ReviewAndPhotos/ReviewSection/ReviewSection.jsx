import React, { useState, useEffect } from 'react';
import './ReviewSection.scss';
// import ReviewFiller from './ReviewFiller';
import axios from 'api/axios';
import { useLocation } from 'react-router-dom';
import Loader from 'components/common/Loader';
import { getLocationData } from 'common/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchKey } from 'features/location/searchKeySlice';
import { setLocationInfo } from 'features/location/locationInfoSlice';

const ReviewSection = ({ reviews: reviewProps = [] }) => {
  let url = useLocation();
  const dispatch = useDispatch();
  const searchKey = useSelector((state) => state.searchKey);
  const locationInfo = useSelector((state) => state.locationInfo);
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleSetData = (reviewData, searchValue) => {
    setReviews(reviewData);
    if (!searchKey) dispatch(setSearchKey(searchValue));
    if (reviewData.length) {
      dispatch(
        setLocationInfo({
          [searchKey]: {
            ...locationInfo[searchKey],
            reviews: reviewData,
          },
        })
      );
    }
  };

  useEffect(() => {
    if (reviewProps.length > 0) {
      setReviews(reviewProps);
      setIsLoading(false);
      return;
    }
    getLocationData({
      url,
      type: 'reviews',
      handleSetData,
      setIsLoading,
    });
  }, []);

  return (
    // <ReviewFiller />
    <div className="review">
      {isLoading && <Loader />}
      {reviews &&
        reviews.map((review) => (
          <div className="review__body">
            <div className="review__body--img">
              <img
                src={`${axios.defaults.baseURL}${review.user.profile_image.url}`}
                alt=""
              />
            </div>

            <div className="review__body--text">
              <h2 className="review__body--text-heading">
                {review.user.username}
              </h2>
              <p className="review__body--text-para">{review.review}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ReviewSection;
