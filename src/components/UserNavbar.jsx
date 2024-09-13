import React from 'react';
import "../assets/css/navbar.css";
import { FaUser } from "react-icons/fa";


function Navbar() {
    return (
        <div className="navbar1">
            
                <div className="nav-image">
                    <img src="logo.png" alt="Logo" className="" />
                </div>

                <div className='nav-navigation'>
                    <span>HOME</span>
                    <span>SHOP</span>
                    <span>CATEGORIES</span>
                    <span>BRANDS</span>
                    <span>ABOUT US</span>
                </div>

                <div className='search'>
                    <input className='input' placeholder='Search'></input>
                </div>

                <div className='user'>
                    <FaUser />
                </div>
           
        </div>
    );
}

export default Navbar;
