import React, { useEffect } from 'react'
import './HeaderMobile.css';
import { HashLink as Link } from 'react-router-hash-link';

const HeaderMobile = ({ mobile, open, close }) => {

  const closeNav = () => {
    open.current.style.display = "block";
    close.current.style.display = "none";
    mobile.current.style.display = "none"
  }

  useEffect(() => {
    closeNav();
  }, [])

  return (
    <div className="mobile">
      <nav className="mobile__option">
        <Link smooth
          to="/"
          onClick={closeNav}>
          <li>Home</li>
        </Link>
        <Link smooth
          to="/projects"
          onClick={closeNav}>
          <li>Projects</li>
        </Link>
        <Link smooth
          to="/tech"
          onClick={closeNav}>
          <li>Technologies</li>
        </Link>
        <Link smooth
          to={"/about"}
          onClick={closeNav}>
          <li>About</li>
        </Link>
      </nav>
    </div>
  )
}

export default HeaderMobile;
