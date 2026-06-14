import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Ex1 from './309_Ex1';
import Ex2 from './309_Ex2';
import Ex3 from './309_Ex3';

function Main() {
  return (
    <BrowserRouter>
      {/* Navigation bar containing the requested links */}
        <Link to="/" style={{ marginRight: '15px' }}>React Js</Link>
        <Link to="/node" style={{ marginRight: '15px' }}>Node Js</Link>
        <Link to="/express">Express Js</Link>
      

      {/* Routing definition mappings */}
      <Routes>
        <Route path="/" element={<Ex1 />} />
        <Route path="/node" element={<Ex2 />} />
        <Route path="/express" element={<Ex3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;