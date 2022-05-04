import React from "react";
import Button from "src/components/common/Button";
import getFeaturedImg from "src/resources/getFeatured.png";
import "./GetFeatured.scss";

const getFeatured = () => {
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
            <Button name="Add a review" />
            <Button name="Add a photo" />
          </div>
        </div>

        <div className="getFeatured__body--img">
          <img src={getFeaturedImg} alt="Get Featured Img" />
        </div>
      </div>
    </div>
  );
};

export default getFeatured;
