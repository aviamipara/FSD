import React from 'react';
import ProductCard from './315';

function App() {
  // Array containing exactly three product objects
  const products = [
    {
      id: 1,
      title: "Laptop Pro",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1496181130204-755241524eab?w=500",
      description: "High-performance laptop suitable for creators and developers."
    },
    {
      id: 2,
      title: "Wireless Mouse",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
      description: "Ergonomic wireless mouse with adjustable DPI and long battery life."
    },
    {
      id: 3,
      title: "Mechanical Keyboard",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
      description: "Tactile mechanical keyboard with customizable RGB backlighting."
    }
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Featured Products</h1>
      
      {/* Flex container forces the child components to align horizontally adjacent */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        {products.map(function(product) {
          return (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;