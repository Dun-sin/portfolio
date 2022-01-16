import React from 'react';
// import { Link } from "react-scroll";
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

// import Open from '@mui/icons-material/ClearAll';
// import Close from '@mui/icons-material/Clear';

const Header = () => {
  return (
    <div className="header">
      <Link smooth to="/">
        <p>Favour</p>
      </Link>
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
          <Link smooth to={"/about#about"}>
            <li>About</li>
          </Link>
        </ul>
      </nav>
      {/* <div className='header__menu'>
        <Open />
        <Close />
        <nav className='menu__option'>
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
            <Link smooth to={"/about#about"}>
              <li>About</li>
            </Link>
          </ul>
        </nav>
      </div> */}
    </div >
  )
}

export default Header;
