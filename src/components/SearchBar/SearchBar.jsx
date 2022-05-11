import React, { useState } from 'react';
import './SearchBar.scss';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchKey } from 'features/searchKey/searchKeySlice';

function SearchBar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchKey(searchValue));
    let path = `/search/${searchValue}`;
    history.push(path);
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input
          className="searchBar__input"
          type="text"
          placeholder="Search for any location"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
