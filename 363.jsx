//  Write a program to build React app having a button which increase count 
// by 1 while clicking it. (useState)


import  { useState } from 'react';

function PB363() {
  const [count, setCount] = useState(0);

   function increase(){
        setCount(count+1)
    }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increase}>Click to increase</button>
    </div>
  );
}

export default PB363