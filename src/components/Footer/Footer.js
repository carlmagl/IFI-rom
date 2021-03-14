import React from "react";
import "./Footer.css";

function Footer() {
  //TODO: Remake navbar
  return (
    <footer className="footer">
      <ul className="footerList">
        <li>
          <a href="https://github.com/carlmagl/IFI-rom" className="list">
            <i className="fab fa-github fa-2x githubIcon"></i>
          </a>
        </li>
      </ul>
      {/* <iframe
        className="map"
        title="IFI"
        frameBorder="0"
        src="https://www.google.com/maps/embed/v1/place?key=&q=Ole-Johan+Dahls+hus"
        allowFullScreen
      ></iframe>{" "} */}
    </footer>
  );
}

export default Footer;
