import React from "react";
import './SearchBar.css';
import logo from '../resources/gv-logo.svg';

function SearchBar() {
  return (
    <div className="searchBar">
      <img src={logo} alt="logo" height={80}/>
      <input type="text" placeholder="Search for any location"></input>
    </div>
  );
}

export default SearchBar;
