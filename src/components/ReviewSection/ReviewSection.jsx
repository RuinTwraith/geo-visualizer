import React, { useState, useEffect } from "react";
import "./ReviewSection.scss";
import ReviewFiller from "./ReviewFiller";
import axios from "src/api/axios";
import { useLocation } from "react-router-dom";
import Loader from "src/components/common/Loader";

const ReviewSection = ({ searchKey }) => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  let url = useLocation();
  const getReviews = () => {
    // const id;
    searchKey = url.pathname.slice(8);
    axios
      .get(`/reviews?location.name=${searchKey}`)
      .then((res) => {
        setReviews(res.data);
        setIsLoading(false);
        console.log("Result Status: " + res.status);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getReviews();
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
