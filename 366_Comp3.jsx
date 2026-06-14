import React, { useContext } from 'react';
import { NumberContext } from './NumberContext';

function Comp3() {
  // Consume the context values directly
  const { num1, num2 } = useContext(NumberContext);

  // Perform multiplication
  const multiplicationResult = num1 * num2;

  return (
    <div>
      <h4>Component 3 (Comp3.js)</h4>
      <p>Received Number 1: {num1}</p>
      <p>Received Number 2: {num2}</p>
      <h2>Multiplication Result: {multiplicationResult}</h2>
    </div>
  );
}

export default Comp3