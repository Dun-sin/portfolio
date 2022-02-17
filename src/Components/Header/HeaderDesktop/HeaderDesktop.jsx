import React from 'react';
import './HeaderDesktop.css';
import { HashLink as Link } from 'react-router-hash-link';


const HeaderDesktop = () => {
  return (
    <nav className="header__option">
      <ul>
        <Link smooth
          to="/">
          <li>Home</li>
        </Link>
        <Link smooth
          to="/projects">
          <li>Projects</li>
        </Link>
        <Link smooth
          to="/tech">
          <li>Technologies</li>
        </Link>
        <Link smooth to={"/about"}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default HeaderDesktop;
