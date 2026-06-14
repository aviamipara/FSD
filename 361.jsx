// Write a program to build React app having 2 input number fields (Number 1 
// and Number 2) and display the entered value on the same page. And then 
// click on add button to calculate the addition of two numbers. Display the 
// addition in h2 tag.

import  { useState } from 'react';

function PB361() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  
  const [result, setResult] = useState('');

  const handleAddition = () => {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };

  return (
    <div>
      <h2>Addition App</h2>

      <label>Number 1: </label>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter first number"/>
      <br /><br />

      <label>Number 2: </label>
      <input 
        type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter second number"/>
      <br /><br />

      <button onClick={handleAddition}>Add</button>

      <h3>Entered Values:</h3>
      <p>Number 1 : {num1}</p>
      <p>Number 2 : {num2}</p>
      <h2>Result : {result}</h2>     
    </div>
  );
}
export default PB361