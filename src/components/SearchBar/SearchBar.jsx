import React, { useState } from "react";
import LogoBlack from "src/resources/gv-logo-black.png";
import "./SearchBar.scss";
import { useHistory } from "react-router-dom";
import axios from "src/api/axios";

function SearchBar({ handleData }) {
  const history = useHistory();
  const [searchKey, setSearchKey] = useState("");

  const handleSubmit = (e, handleData) => {
    e.preventDefault();
    let path = `/search/${searchKey}`;
    history.push(path);
    handleData(searchKey);
  };

  return (
    <div className="searchBar">
      <img className="searchBar__logo" src={LogoBlack} alt="logo" />
      <form onSubmit={(e) => handleSubmit(e, handleData)}>
        <input
          className="searchBar__input"
          type="text"
          placeholder="Search for any location"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
