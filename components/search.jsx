import logo from '../imgs/logo.jpg';
import './search.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

function Search() {
  const location = useLocation();
  const event = location.state || {};


  const navigate = useNavigate();
  const [bibNumber, setBibNumber] = useState('');

  const handleInputChange = (event) => {
    setBibNumber(event.target.value);
  };

  const handleClick = () => {
    navigate('/download', { state: { bib : bibNumber, name: event.name } });
  };

  return (
    <div style={{ backgroundColor: '#F2F5F9', height: '100vh' }}>
      <div style={{ padding: '2rem' }}>  
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div style={{ paddingLeft: '5rem' }}>
        <h1 className="title">{event.name}</h1>
      </div>
      <div className='search'>
        <p className="description">Enter Your Bib number</p>
        <input
          className="text-box"
          type="number"
          value={bibNumber}
          onChange={handleInputChange}
        />
        <button className="button center-icon" onClick={handleClick}>
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
}

export default Search;
