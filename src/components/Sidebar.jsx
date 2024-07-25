import React, { useState } from 'react';
import '../assets/css/sidebar.css'; // You'll need to create this CSS file

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? '✕' : '☰'}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;