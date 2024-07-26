import React, { useEffect }  from 'react';
import { Outlet } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../assets/css/layout.css';

function AdminComponent() {
    useEffect(() => {
        checkLogin();
    }, []);

    // function handleLogout() {
    //     localStorage.removeItem('token');
    //     // Redirect to login page
    //     navigate('/login');
    //   }

    // function isTokenExpired() {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //       try {
    //         const decodedToken = jwtDecode(token);
    //         const currentTime = Date.now() / 1000; // Convert to seconds
    //         return decodedToken.exp < currentTime;
    //       } catch (error) {
    //         console.error("Error decoding token:", error);
    //         return true; // Assume expired if there's an error
    //       }
    //     }
    //     return true; // No token means it's expired (or never existed)
    //   }

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