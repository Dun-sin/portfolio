import React from 'react'
import './HeaderMobile.css';
import { HashLink as Link } from 'react-router-hash-link';

const HeaderMobile = ({ state }) => {

  return (
    <div className="mobile">
      <nav className="mobile__option">
        <Link smooth
          to="/"
          onClick={() => {
            state()
          }}
        >
          <li>Home</li>
        </Link>
        <Link smooth
          to="/projects"
          onClick={() => {
            state()
          }}
        >
          <li>Projects</li>
        </Link>
        <Link smooth
          to="/tech"
          onClick={() => {
            state()
          }}
        >
          <li>Technologies</li>
        </Link>
        <Link smooth
          to={"/about"}
          onClick={() => {
            state()
          }}
        >
          <li>About</li>
        </Link>
      </nav>
    </div >
  )
}

export default HeaderMobile;
