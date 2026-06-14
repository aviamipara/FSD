// Write a reactJS program to perform the tasks as asked below.
// •	Create one main file (parent file) name Comp.js and other 3 component 
// files Comp1.js, Comp2.js, Comp3.js. 
// •	Pass Number1 and Number 2 from Comp.js file to Comp3.js file. Calculate 
// multiplication of the numbers using useContext


import React, { useState } from 'react';
import Comp1 from './Comp1';
import { createContext } from 'react';

 const NumberContext = createContext();
function Comp() {
  // Define Number1 and Number2
  const [num1] = useState(6);
  const [num2] = useState(7);

  return (
    // Provide the numbers as an object to the entire component tree
    <NumberContext.Provider value={{ num1, num2 }}>
      <div>
        <h1>Parent Component (Comp.js)</h1>
        <p>Sending Numbers: {num1} and {num2}</p>
        <hr />
        {/* Render Comp1 (No props passed directly here) */}
        <Comp1 />
      </div>
    </NumberContext.Provider>
  );
}

export default Comp