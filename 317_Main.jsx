import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './317_Home';
import Product from './317_Product';
import Contact from './317_Contact';

function Main() {
  return (
    <BrowserRouter>
      <div>
        {/* Navigation Bar Header */}
        <nav style={{ padding: '10px', background: '#f4f4f4' }}>
          <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <hr />

        {/* Route Definitions mapping paths to corresponding components */}
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Main