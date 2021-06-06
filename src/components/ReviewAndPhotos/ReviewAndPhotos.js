import React from 'react';
import PhotoSection from '../PhotoSection/PhotoSection';
import ReviewSection from '../ReviewSection/ReviewSection';
import "./ReviewAndPhotos.scss";

const ReviewAndPhotos = ({searchKey}) => {
  return (
    <div className="rpSection">
      <div className="rpSection__body">

        <div className="rpSection__body--reviews">
          <div className="rpSection__body--heading">Reviews</div>
          <ReviewSection searchKey={searchKey} />
        </div>

        <div className="rpSection__body--photos">
          <div className="rpSection__body--heading">Photos</div>
          <PhotoSection searchKey={searchKey} />
        </div>
      </div>

    </div>
  );
}

export default ReviewAndPhotos
