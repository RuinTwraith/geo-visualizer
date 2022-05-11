import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoWhite from 'resources/gv-logo-white.png';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <Link to="/">
            <img src={LogoWhite} alt="Geo Visualizer Logo" className="logo" />
          </Link>
        </div>
        <nav className="header__navigation">
          <ul>
            <li>
              <a href="#">Mountains</a>
            </li>
            <li>
              <a href="#">Beach</a>
            </li>
            <li>
              <a href="#">Road</a>
            </li>
            <li>
              <a href="#">Landscape</a>
            </li>
            <li>
              <a href="#">Waterfalls</a>
            </li>
            <li>
              <a href="#">Rivers</a>
            </li>
            <li>
              <a href="#">Deserts</a>
            </li>
            <li>
              <a href="#">Temples</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
