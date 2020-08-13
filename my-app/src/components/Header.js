import React from 'react';
import './Header.css';


function Header() {
    return(
        <header className="header">
            <p>Hei, jeg fungerer</p>
            <ul>
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
            </ul>
        </header>
    )
}

export default Header;
