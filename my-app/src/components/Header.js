import React from 'react';
import './Header.css';


function Header() {
    //TODO: Remake navbar
    return(
        <header className="header">
            <div className="logo">
                IFI-Rom - Tittel he
            </div>
            <ul className="liste">
                <li className="liste"><a href="default.asp">Hjem</a></li>
                <li className="liste"><a href="default.asp">Info</a></li>
                <li className="liste"><a href="default.asp">Om oss</a></li>
                <li className="liste"><a href="default.asp">Kontakt</a></li>
            </ul>
        </header>
    )
}

export default Header;
