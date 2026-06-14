import React from 'react';
import ProductCard from './311';

// Using standard function declaration
function App() {
  // Array of 2 product objects
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      pic: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
      id: 2,
      name: "Minimalist Smart Watch",
      price: 149.50,
      pic: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    }
  ];

  return (
    <div>
      <h1>Product List</h1>
      
      {/* Mapping through the array using a standard function callback */}
      {products.map(function(product) {
        return (
          <ProductCard 
            key={product.id}
            pic={product.pic}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default App;