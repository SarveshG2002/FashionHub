import React from 'react';
import UserNavbar from '../components/UserNavbarComponent';
import "../assets/css/banner.css";


function BannerComponent() {
    return (
        <div className='banner'>
           <div className='bannerHeading'>
                <h1>Dress Bold and Live Bold by Empowering Your Life with Unstoppable Style.</h1>
                {/* <h2>Unlock the power of confidence through bold fashion choices that reflect your unique spirit, turning everyday moments into unforgettable statements.</h2> */}
                <div className='shop-now'>Shop now</div>
           </div>
           <div className='bannerImage'>
                <img src='banner-girl1.png'></img>
           </div>
           
        </div>
    );
}

export default BannerComponent;
