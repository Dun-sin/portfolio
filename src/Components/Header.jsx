import React, { useState, useRef, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

// Components
import HeaderMobile from './Header/HeaderMobile/HeaderMobile';
import HeaderDesktop from './Header/HeaderDesktop/HeaderDesktop';

// Icons
import Open from '@mui/icons-material/ClearAll';
import Close from '@mui/icons-material/Clear';

const Header = () => {
  const [open, setOpen] = useState(true);
  const [close, setClose] = useState(false);

  const openRef = useRef();
  const closeRef = useRef();
  const mobileRef = useRef();

  const displayDefault = () => {
    openRef.current.style.display = "block";
    closeRef.current.style.display = "none";
    mobileRef.current.style.display = "none"
  }


  const toggle = () => {
    setOpen(!open);
    setClose(!close);

    if (open) {
      displayDefault();
    } else if (close) {
      openRef.current.style.display = "none";
      closeRef.current.style.display = "block";
      mobileRef.current.style.display = "block";
    }
  }

  useEffect(() => {
    displayDefault();
  }, [])

  return (
    <div className="header">
      <Link smooth to="/">
        <p>Favour</p>
      </Link>
      <div className="desktop">
        <HeaderDesktop />
      </div>
      <div className='mobile'>
        <div className="toggle" onClick={toggle}>
          <div className="open" ref={openRef}>
            <Open />
          </div>
          <div className="close" ref={closeRef}>
            <Close />
          </div>
        </div>
        <div className="mobileView" ref={mobileRef}>
          <HeaderMobile mobile={mobileRef} open={openRef} close={closeRef} openToggle={setOpen} />
        </div>
      </div>
    </div>
  )
}

export default Header;
