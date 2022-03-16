import React, { useState } from 'react';
import './Header.css';
import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded';
import { Link } from 'react-router-dom';
import CommuteIcon from '@material-ui/icons/Commute';
import EmojiFoodBeverage from '@material-ui/icons/EmojiFoodBeverage';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header primary">
      <div className="logo">
        <Link className="logoHome" to="/">
          <HomeWorkRoundedIcon className="logoImage" />
          <h1 className="logoText">IFI-rom</h1>
        </Link>
      </div>
      <ul className={open ? 'open linkList' : 'linkList'}>
        <li className="listElement">
          <Link
            className="link"
            to="/kantine"
            onClick={() => {
              if (window.innerWidth < 900) setOpen(!open);
            }}
          >
            {!open && <EmojiFoodBeverage size="fa-2x" className="logoImage" />}
            <h1 className={open ? 'white logoText' : 'logoText'}>Kantine</h1>
          </Link>
        </li>
        <li className="listElement">
          <Link
            className="link"
            to="/kollektivt"
            onClick={() => {
              if (window.innerWidth < 900) setOpen(!open);
            }}
          >
            {!open && <CommuteIcon size="fa-2x" className="logoImage" />}
            <h1 className={open ? 'white logoText' : 'logoText'}>Kollektivt</h1>
          </Link>
        </li>
        <li className="listElement">
          <Link
            className="link"
            to="/foreninger"
            onClick={() => {
              if (window.innerWidth < 900) setOpen(!open);
            }}
          >
            {!open && <i className="fas fa-users  logoImage" />}
            <h1 className={open ? 'white logoText' : 'logoText'}>Foreninger</h1>
          </Link>
        </li>
      </ul>
      <IconButton
        className="menuButton"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <MenuIcon className={open ? 'white' : ''} />
      </IconButton>
    </header>
  );
}

export default Header;
