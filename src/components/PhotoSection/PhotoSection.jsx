import React, { useState, useEffect } from "react";
import "./PhotoSection.scss";
import axios from "src/api/axios";
import { useLocation } from "react-router-dom";

const PhotoSection = ({ searchKey }) => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [photosLeft, setPhotosLeft] = useState([]);
  const [photosRight, setPhotosRight] = useState([]);

  let url = useLocation();
  const getPhotos = () => {
    searchKey = url.pathname.slice(8);
    axios
      .get(`/locations?name=${searchKey}`)
      .then((res) => {
        setPhotos(res.data[0].photos[0].images);
        setIsLoading(false);
        console.log("Photos Result Status: " + res.status);
        // console.log(axios.defaults.baseURL);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const photoList = () => {
    var photosLeft = [];
    var photosRight = [];
    for (let i = 0; i < photos.length; i++) {
      if (i % 2 === 0) {
        photosLeft.push(photos[i]);
      } else {
        photosRight.push(photos[i]);
      }
    }
    setPhotosLeft(photosLeft);
    setPhotosRight(photosRight);
    console.log(photosLeft);
    console.log(photosRight);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  useEffect(() => {
    if (photos) {
      photoList();
    }
  }, [photos]);

  return (
    <div className="photo">
      {isLoading && <div className="loading loading--center"></div>}
      {photosLeft && (
        <div className="photo__body">
          <div className="photo__body-col">
            {photosLeft.map((photo) => (
              <div className="photo__body--img" key={photo.id}>
                <img
                  src={`${axios.defaults.baseURL}${photo.url}`}
                  alt={photo.alternativeText}
                />
                <p className="photo__body--img-caption">{photo.caption}</p>
              </div>
            ))}
          </div>
          <div className="photo__body-col">
            {photosRight.map((photo) => (
              <div className="photo__body--img" key={photo.id}>
                <img
                  src={`${axios.defaults.baseURL}${photo.url}`}
                  alt={photo.alternativeText}
                />
                <p className="photo__body--img-caption">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoSection;
