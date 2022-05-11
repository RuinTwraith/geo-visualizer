import React from 'react';
import SearchBar from 'components/SearchBar';
import LogoBlack from 'resources/gv-logo-black.png';
import './HomePage.scss';

function HomePage() {
  return (
    <div className="homepage">
      <img className="homepage__logo" src={LogoBlack} alt="logo" />
      <SearchBar />
    </div>
  );
}

export default HomePage;
