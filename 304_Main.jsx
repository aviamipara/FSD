import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './304_Home';
import About from './304_About';

function Main() {
  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <nav style={{
        backgroundColor: '#333',
        padding: '15px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
      }}>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/about" style={navLinkStyle}>About</Link>
      </nav>

      {/* Routing Configuration */}
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Simple inline styling for navigation links
const navLinkStyle = {
  color: 'white',
  margin: '0 15px',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold'
};

export default Main;