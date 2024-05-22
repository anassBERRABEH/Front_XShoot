import React from 'react';
import './navbar.css'
import logo from '../imgs/logo.jpg'
import { useNavigate } from 'react-router-dom';

function Navbar() {


  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/AddEvent');
  };

  return (
    
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        
        
        <div className="search-bar">
          <button className="cta-button" onClick={handleClick}>Add Event</button>
          <input type="text" placeholder="Search" />
          <button className="search-button">Search</button>
        </div>
      </nav>
    
  )
}

export default Navbar;