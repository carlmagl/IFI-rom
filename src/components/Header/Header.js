import React, { useState } from "react";
import "./Header.css";
import HomeWorkRoundedIcon from "@material-ui/icons/HomeWorkRounded";
import { Link } from "react-router-dom";
import CommuteIcon from "@material-ui/icons/Commute";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

function Header({ color = "primary" }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`header ${color}`}>
      <div className="logo">
        <Link className="logoHome" to="/">
          <HomeWorkRoundedIcon className="logoImage" />
          <h1 className="logoText">IFI-rom</h1>
        </Link>
      </div>
      <ul className={open ? "open linkList" : "linkList"}>
        <li className="listElement">
          <Link
            className="link"
            to="/kollektivt"
            onClick={() => {
              if (window.innerWidth < 900) setOpen(!open);
            }}
          >
            <CommuteIcon size="fa-2x" className="logoImage" />
            <h1 className={open ? "white logoText" : "logoText"}>Kollektivt</h1>
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
            <i className="fas fa-users  logoImage"></i>
            <h1 className={open ? "white logoText" : "logoText"}>Foreninger</h1>
          </Link>
        </li>
      </ul>
      <IconButton
        className="menuButton"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <MenuIcon className={open ? "white" : ""} />
      </IconButton>
    </header>
  );
}

export default Header;
