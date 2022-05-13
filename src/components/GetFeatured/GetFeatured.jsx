import React, { useState } from 'react';
import Button from 'components/common/Button';
import getFeaturedImg from 'resources/getFeatured.png';
import './GetFeatured.scss';
import AddInfoModal from './AddInfoModal';

const GetFeatured = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const handleAddButtonClick = (type) => {
    setOpenModal(true);
    setModalProps({ type, onClose: setOpenModal });
  };

  return (
    <div className="getFeatured">
      <div className="getFeatured__body">
        <div className="getFeatured__body--text">
          <h1 className="getFeatured__body--text-heading">
            Want to get featured ?
          </h1>
          <p className="getFeatured__body--text-para">
            Our contributors get reward points for every contribution they do in
            the form of review or photos.
          </p>
          <div className="getFeatured__body--text-btn">
            <Button
              name="Add a review"
              onClick={() => handleAddButtonClick('Review')}
            />
            <Button
              name="Add a photo"
              onClick={() => handleAddButtonClick('Photo')}
            />
          </div>
        </div>

        <div className="getFeatured__body--img">
          <img src={getFeaturedImg} alt="Get Featured Img" />
        </div>
      </div>
      <AddInfoModal openModal={openModal} {...modalProps} />
    </div>
  );
};

export default GetFeatured;
