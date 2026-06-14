import React from 'react';

function FoodItem(props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      margin: '10px 0',
      borderRadius: '6px',
      backgroundColor: '#fafafa'
    }}>
      <h3>{props.name}</h3>
      <p><strong>Price:</strong> {props.price}</p>
      <p><strong>Description:</strong> {props.description}</p>
    </div>
  );
}

export default FoodItem;