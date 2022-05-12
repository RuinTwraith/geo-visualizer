import React from 'react';
import PhotoSection from './PhotoSection';
import ReviewSection from './ReviewSection';
import './ReviewAndPhotos.scss';
import { useSelector } from 'react-redux';

const ReviewAndPhotos = () => {
  const locationInfo = useSelector((state) => state.locationInfo);
  const searchKey = useSelector((state) => state.searchKey);

  return (
    <div className="rpSection">
      <div className="rpSection__body">
        <div className="rpSection__body--reviews">
          <div className="rpSection__body--heading">Reviews</div>
          <ReviewSection reviews={locationInfo[searchKey]?.reviews} />
        </div>

        <div className="rpSection__body--photos">
          <div className="rpSection__body--heading">Photos</div>
          <PhotoSection photos={locationInfo[searchKey]?.photos} />
        </div>
      </div>
    </div>
  );
};

export default ReviewAndPhotos;
