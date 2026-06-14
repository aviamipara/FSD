// Create a React function component named File1 that receives two props, productName and 
// price. The component should display the product name and price. Additionally, add a button 
// labeled "Add to cart" to the component. When the button is clicked onClick event triggered and 
// an alert should be displayed with the message "Your Product is Added to cart!".



import React from 'react';

function File1(props) {
  // Event handler function that triggers on button click
  function handleAddToCart() {
    alert("Your Product is Added to cart!");
  }

  return (
    <div>
      <h2>Product: {props.productName}</h2>
      <p>Price: ${props.price}</p>
      
      {/* Button with onClick event listener pointing to our handler */}
      <button onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
}

export default File1;