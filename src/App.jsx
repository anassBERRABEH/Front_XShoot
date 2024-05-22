// src/App.jsx
import React, { useState } from 'react';

import Event from '../components/event';
import Download from '../components/download';
import AddEvent from '../components/addEvent';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Search from '../components/search';
import './App.css'
function App() {
  const [bibNumber, setBibNumber] = useState('');
  return (
  

  <Router>
      <>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Event />} />
          <Route path="/search" element={<Search />} />
          <Route path="/download" element={<Download/>} />  
          <Route path="/addEvent" element={<AddEvent/>} />  

        </Routes>
      </>
    </Router>
  );
}

export default App;
