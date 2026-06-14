// Create a React app to perform tasks as asked using functional component:
// 1)Create a React Router that includes three routes: Home, Food Items, and Contact and
// implement navigation between these routes. 2)Create a route that displays a Home
// page, Food Items details page and Contact details page. 3) When a user clicks on
// Home page it should navigate to the home page and display “Welcome to LJU” in bold
// in the h1 heading. When a user clicks on a Food Items page, it should navigate to the
// Food Items Detail page and display three products&#39; information with name, price and
// description using props. And when the user clicks on Contact page it should navigate to
// contact details page and display contact information with blue color font.


import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FoodItem from './310_FoodItem';

// --- Page 1: Home Component ---
function Home() {
  return (
    <div>
      <h1><strong>Welcome to LJU</strong></h1>
    </div>
  );
}

// --- Page 2: Food Items Component ---
function FoodItems() {
  const products = [
    { name: 'Margherita Pizza', price: '$12.99', desc: 'Classic cheese and tomato pizza with fresh basil.' },
    { name: 'Veggie Burger', price: '$8.50', desc: 'Plant-based patty served with lettuce, tomato, and special sauce.' },
    { name: 'Chocolate Brownie', price: '$4.25', desc: 'Rich, fudgy chocolate brownie served warm.' }
  ];

  return (
    <div>
      <h2>Food Items Detail Page</h2>

      {products.map((item, index) => (
        <FoodItem 
          key={index} 
          name={item.name} 
          price={item.price} 
          description={item.desc} 
        />
      ))}
    </div>
  );
}

// --- Page 3: Contact Component ---
function Contact() {
  return (
    <div>
      <h2>Contact Details</h2>
      <div style={{ color: 'blue', fontSize: '18px', lineHeight: '1.6' }}>
        <p><strong>Email:</strong> support@lju.edu</p>
        <p><strong>Phone:</strong> +1 (555) 019-2834</p>
        <p><strong>Address:</strong> LJU Campus, Main University Road</p>
      </div>
    </div>
  );
}

// --- Main Router Hub ---
function PB310() {
  return (
    <BrowserRouter>
      {/* Navigation Layout */}
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/food" style={linkStyle}>Food Items</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>

      {/* Routes Routing Functionality */}
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<FoodItems />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '16px'
};

export default PB310