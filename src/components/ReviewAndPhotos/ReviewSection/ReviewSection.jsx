import React, { useState, useEffect } from 'react';
import './ReviewSection.scss';
// import ReviewFiller from './ReviewFiller';
import axios from 'api/axios';
import { useLocation } from 'react-router-dom';
import Loader from 'components/common/Loader';
import { getLocationData } from 'common/utils';

const ReviewSection = () => {
  let url = useLocation();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getLocationData({
      url,
      type: 'reviews',
      handleSetData: setReviews,
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
