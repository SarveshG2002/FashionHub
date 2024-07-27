import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Users", path: "/admin/users" },
    { name: "SEO", path: "/admin/seo" },
    { name: "Brands", path: "/admin/brands"},
    { name: "Category", path: "/admin/category"}
  ];

  return (
    <aside>
      <div className='CompanyProfile'>
        <div style={{ height: "40px" }}>
          <img src="/companylogo.png" style={{ width: "100%", height: "100%", borderRadius: "50%" }} alt="Company Logo" />
        </div>
        <div style={{ fontSize: "20px", display: "flex", paddingLeft: "10px" }}>
          FashionHub
        </div>
      </div>
      <div className='CompanyProfile'>
        <div style={{ height: "40px" }}>
          <img src="/companylogo.png" style={{ width: "100%", height: "100%", borderRadius: "50%" }} alt="User Profile" />
        </div>
        <div style={{ fontSize: "20px", display: "flex", paddingLeft: "10px" }}>
          Sarvesh
        </div>
      </div>
      <div className='nav-items'>
        {navItems.map((item, index) => (
          <Link 
            to={item.path} 
            key={index} 
            className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;