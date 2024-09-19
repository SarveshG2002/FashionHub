import React from 'react';
import UserNavbar from '../components/UserNavbarComponent';
import "../assets/css/banner.css";


function BannerComponent() {
    return (
        <div className='banner'>
           <div className='bannerHeading'>
                <h1>Dress Bold and Live Bold by Empowering Your Life with Unstoppable Style.</h1>
           </div>
           <div className='bannerImage'>
                <img src='banner-girl1.png'></img>
           </div>
           
        </div>
    );
}

export default BannerComponent;
