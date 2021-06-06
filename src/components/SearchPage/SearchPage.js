import React, { useEffect, useState } from "react";
import "./SearchPage.scss";
import GetFeatured from "../GetFeatured/GetFeatured";
import ReviewAndPhotos from "../ReviewAndPhotos/ReviewAndPhotos";
import axios from "../axios";
import { useLocation } from "react-router-dom";


const SearchPage = ({ searchKey }) => {

  let url = useLocation();
  //console.log(url.pathname.slice(8));

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => {
    searchKey = url.pathname.slice(8);
    axios.get(`/locations?name=${searchKey}`)
      .then(res => {
        setData(res.data[0]);
        setIsLoading(false);
        console.log("SearchPage Result Status: " + res.status);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    getData();
  }, []);




  return (
    <div>
      { isLoading &&
        <div className="loading loading--center">

        </div>
      }
      { !isLoading &&
        <div>
          <div className="searchPage">
            <div className="searchPage__info">
              <p>INDIA {">"} Type : {data.type}</p>
              <h1 className="searchPage__info-name">{data.name}</h1>
              <p className="searchPage__info-description">
                {data.description}
              </p>
              <a href="#review-photo-section" className="searchPage__info-review">Read reviews</a>
            </div>
            {
              data.photos &&
              <div className="searchPage__img">
                <img
                  src={`${axios.defaults.baseURL}${data.photos[0].images[0].url}`}
                  alt={data.photos[0].images[0].alternativeText}
                />
                <p className="searchPage__img-caption">{data.photos[0].images[0].caption}</p>
              </div>
            }
          </div>

          <GetFeatured />
          <div id="review-photo-section">
            <ReviewAndPhotos searchKey={searchKey} />
          </div>
        </div>
      }
    </div>

  );
}

export default SearchPage;
