import React, { useState, useRef, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// Components
import HeaderMobile from './Header/HeaderMobile/HeaderMobile';
import HeaderDesktop from './Header/HeaderDesktop/HeaderDesktop';

// Icons
import Open from '@mui/icons-material/ClearAll';
import Close from '@mui/icons-material/Clear';

import './Header.css';

const Header = () => {
  // const [open, setOpen] = useState(true);
  // const [close, setClose] = useState(false);
  const [onOff, setOnOff] = useState(false);

  const openRef = useRef();
  const closeRef = useRef();
  const mobileRef = useRef();

  const toggle = () => {
    setOnOff(!onOff);
  }

  const initalState = () => {
    setOnOff(false);
  }

  useEffect(() => {
    initalState();
  }, [])


  return (
    <div className="header">
      <Link smooth to="/">
        Favour
      </Link>
      <div className="desktop">
        <HeaderDesktop />
      </div>
      <div className='mobile'>
        <div className="toggle" onClick={toggle}>
          {onOff ? <div className="close" ref={closeRef}>
            <Close />
          </div> : <div className="open" ref={openRef}>
            <Open />
          </div>}
        </div>
        {onOff ? <div className="mobileView" ref={mobileRef}>
          <HeaderMobile state={initalState} />
        </div> : <div style={{ display: "none" }}></div>}
      </div>
    </div>
  )
}

export default Header;
