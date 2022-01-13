import React from 'react';
// import { Link } from "react-scroll";
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <nav className="header__option">
        <ul>
          <Link smooth to="/">
            <li>Home</li>
          </Link>
          <Link smooth
            to="/projects">
            <li>Projects</li>
          </Link>
          <Link smooth to={"/about#about"}>
            <li>About</li>
          </Link>
          <Link smooth
            to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div >
  )
}

export default Header;
