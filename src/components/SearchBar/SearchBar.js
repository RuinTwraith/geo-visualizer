import React from "react";
import LogoBlack from "../../resources/gv-logo-black.png";
import './SearchBar.scss';

function SearchBar() {
  return (
    <div className="searchBar">
      <img src={LogoBlack} alt="logo" />
      <input type="text" placeholder="Search for any location"/>
    </div>
  );
}

export default SearchBar;
