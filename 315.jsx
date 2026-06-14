import React from 'react';

function ProductCard(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '10px', width: '30%' }}>
      <img 
        src={props.image} 
        alt={props.title} 
        style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
      />
      <h2>{props.title}</h2>
      <h3>${props.price}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default ProductCard;