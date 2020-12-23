import React from "react";
import "./Header.css";
import HomeWorkRoundedIcon from "@material-ui/icons/HomeWorkRounded";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link className="logoHome" to="/">
          <HomeWorkRoundedIcon className="logoImage" />
          <h1 className="logoText">IFI-rom</h1>
        </Link>
      </div>
      <ul class="linkList">
        {/* <li className="listElement">
          <Link className="link" to="/foreninger">
            <i class="fas fa-graduation-cap fa-2x"></i>
            <h1 className="logoText">Ressurser</h1>
          </Link>
        </li> */}
        <li className="listElement">
          <Link className="link" to="/foreninger">
            <i className="fas fa-users fa-2x"></i>
            <h1 className="logoText">Foreninger</h1>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
