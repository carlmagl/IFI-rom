import React, { useState } from "react";
import "./Header.css";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { Link } from "react-router-dom";
import CommuteIcon from "@mui/icons-material/Commute";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header primary">
      <div className="logo">
        <Link className="logoHome" to="/">
          <HomeWorkIcon className="logoImage" />
          <h1 className="logoText">IFI-rom</h1>
        </Link>
      </div>
      <ul className={open ? "open linkList" : "linkList"}>
        <li className="listElement">
          <Link
            className="link"
            to="/kantine"
            onClick={() => {
              if (window.innerWidth < 900) setOpen(!open);
            }}
          >
            {!open && <FastfoodIcon size="fa-2x" className="logoImage" />}
            <h1 className={open ? "white logoText" : "logoText"}>Kantine</h1>
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
            {!open && <i className="fas fa-users  logoImage" />}
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
