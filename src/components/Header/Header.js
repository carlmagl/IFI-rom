import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  //TODO: Remake navbar
  return (
    <header className="header">
      <div className="logo">
        <Link className="logoLink" to="/">
          <h1 className="logoText">IFI-rom</h1>
        </Link>
      </div>
      <Link className="logoLink" to="/foreninger">
        <h1 className="logoText">Foreninger</h1>
      </Link>
    </header>
  );
}

export default Header;
