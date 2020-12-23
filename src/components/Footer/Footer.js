import React from "react";
import "./Footer.css";

function Footer() {
  //TODO: Remake navbar
  return (
    <footer className="footer">
      <ul className="footerList">
        <li>
          <a href="https://github.com/carlmagl" className="list">
            <p>Github -</p>
            <i class="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
