import React from "react";
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="searchBar">
      {/* <img src={logo} alt="logo" height={80}/> */}
      <input type="text" placeholder="Search for any location"/>
    </div>
  );
}

export default SearchBar;
