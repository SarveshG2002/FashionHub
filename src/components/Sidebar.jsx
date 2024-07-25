import React, { useState } from 'react';
// import companyImage from "../../public/companylogo.png";
// import '../assets/css/sidebar.css'; // You'll need to create this CSS file

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside>
      <div className='CompanyProfile'>
        <div style={{height:"40px"}}>
          <img src="/companylogo.png" style={{width:"100%",height:"100%",borderRadius:"50%"}}></img>
        </div>
        <div style={{fontSize:"20px",display:"flex",paddingLeft:"10px"}}>
          FashionHub
        </div>
      </div>
      <div className='CompanyProfile'>
        <div style={{height:"40px"}}>
          <img src="/companylogo.png" style={{width:"100%",height:"100%",borderRadius:"50%"}}></img>
        </div>
        <div style={{fontSize:"20px",display:"flex",paddingLeft:"10px"}}>
          FashionHub
        </div>
      </div>
      <div className='nav-items'>
        <div className='nav-item active'>
          Dashboard
        </div>
        <div className='nav-item '>
          Dashboard
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;