import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import "./HomePage.scss";

function HomePage({handleData}) {
  return (
    <div className="homepage">
      <SearchBar handleData={handleData}/>
    </div>
  )
}

export default HomePage;
