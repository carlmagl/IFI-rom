import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
    //TODO: Remake navbar
    return(
        <header className="header">
            <div className="logo">
                <Link className="logoLink" to="/">
                    <h1 className="logoText">
                        Rom på Ole Johan Dahls Hus 
                    </h1>
                </Link>
            </div>
        </header>
    )
}

export default Header;
