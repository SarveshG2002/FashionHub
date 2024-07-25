import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../assets/css/layout.css';

function AdminComponent() {
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