import React from "react";
import "./SearchPage.scss";
import GetFeatured from "../GetFeatured/GetFeatured";
import ReviewAndPhotos from "../ReviewAndPhotos/ReviewAndPhotos";

function index() {
  return (
    <div>
      <div className="searchPage">
        <div className="searchPage__info">
          <p>INDIA {">"} New Delhi {">"} </p>
          <h1>Akshardham</h1>
          <p>
            Swaminarayan Akshardham (New Delhi) is a Hindu temple, and a
            spiritual-cultural campus in New Delhi, India. Also referred to as
            Akshardham Temple or Delhi Akshardham, the complex displays millennia of
            traditional and modern Hindu culture, spirituality, and architecture.
        </p>
          <p>Read more reviews</p>
        </div>
        <div className="searchPage__img">

        </div>
      </div>

      <GetFeatured />

      <ReviewAndPhotos />
      
    </div>

  );
}

export default index;
