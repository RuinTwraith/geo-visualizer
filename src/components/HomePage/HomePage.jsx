import React from "react";
import SearchBar from "src/components/SearchBar";
import "./HomePage.scss";

function HomePage({ handleData }) {
  return (
    <div className="homepage">
      <SearchBar handleData={handleData} />
    </div>
  );
}

export default HomePage;
