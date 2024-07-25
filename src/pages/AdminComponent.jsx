import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../assets/css/layout.css';

function Component() {
    return (
        <>
            {/*  */}
            <div className='mainPanel'>
                <Sidebar />
                <div className='NavPlusContent'>
                    <Navbar />
                    <div className='main-container'>
                        hello
                    </div>
                </div>
            </div>
        </>
    );
}

export default Component;