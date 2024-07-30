import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../assets/css/layout.css';
// import {getAllbrands} from '../components/CommonData';
// import { CommonDataProvider } from '../components/CommonDataContext';


function AdminComponent() {
    useEffect(() => {
        checkLogin();
    }, []);

    function checkLogin() {
        if (localStorage.getItem('username')) {
            // window.location.href = '/dashboard';
        } else {
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = '/login';
        }
    }
    return (
        
            <div className='mainPanel'>
                <Sidebar />
                <div className='NavPlusContent'>
                    <Navbar />
                    <div className='main-container'>
                        <Outlet />
                    </div>
                </div>
            </div>
        

    );
}

export default AdminComponent;