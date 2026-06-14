//  Create a React Form for select any of pizza size using radio button.


import { useState } from 'react';

function PB370() {
  const [pizzaSize, setPizzaSize] = useState('Medium');

  function handleSizeChange(event) {
    setPizzaSize(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("You ordered a " + pizzaSize + " pizza!");
  }

  return (
    <div>
      <h2>Select Your Pizza Size</h2>
      <form onSubmit={handleSubmit}>
        
        <input type="radio" value="Small" checked={pizzaSize === 'Small'} onChange={handleSizeChange} />Small ($8.99)
        <br />        
        <input type="radio" value="Medium" checked={pizzaSize === 'Medium'} onChange={handleSizeChange} />Medium ($10.99)
        <br />        
        <input type="radio" value="Large" checked={pizzaSize === 'Large'} onChange={handleSizeChange} />Large ($12.99)
        <br />        
        <input type="radio" value="Extra Large" checked={pizzaSize === 'Extra Large'} onChange={handleSizeChange} />Extra Large ($19.99)

        <br />
        <button type="submit" onSubmit={handleSubmit}>Confirm Order</button>
      </form>

      <h3>Your Current Selection: {pizzaSize}</h3>
    </div>
  );
}

export default PB370