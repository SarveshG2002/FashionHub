import React from 'react';
import "../assets/css/navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            
                <div className="nav-image">
                    <img src="logo.png" alt="Logo" className="" />
                </div>

                <div className="nav-navigation">
                    <a href="/" className="">Home</a>
                    <a href="/about" className="">About</a>
                    <a href="/contact" className="">Contact</a>
                </div>
           
        </div>
    );
}

export default Navbar;
