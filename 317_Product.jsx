import React from 'react';
import ProductCard from './317';

function Product() {
  const productData = [
    { id: 1, title: "Wireless Mouse", price: 25.99, description: "Ergonomic 2.4GHz optical wireless mouse." },
    { id: 2, title: "Mechanical Keyboard", price: 79.99, description: "RGB backlit tactile mechanical gaming keyboard." },
    { id: 3, title: "Gaming Monitor", price: 199.99, description: "24-inch Full HD 144Hz refresh rate display." }
  ];

  return (
    <div>
      <h2>Product Details</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {productData.map(function(item) {
          return (
            <ProductCard 
              key={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Product;