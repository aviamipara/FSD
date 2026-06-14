// Create react app to pass product image, name and price as properties from one component to 
// another component. Add an array of objects with pic, name and price properties of 2 products. 
// Display Image name and price of the products in browser using map method


import React from 'react';

// Using standard function declaration and destructuring props
function ProductCard({ pic, name, price }) {
  return (
    <div>
      <img src={pic} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
    </div>
  );
}

export default ProductCard;