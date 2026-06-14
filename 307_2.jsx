import React from 'react';
import PB307 from './307';

function Pb307_2() {
  // Array of objects containing name and age
  const peopleArray = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 45 },
    { name: 'Charlie', age: 32 },
    { name: 'Diana', age: 50 },
    { name: 'Ethan', age: 19 }
  ];

  return (
    <div>
      <h2>User Directory Filter</h2>
      {/* Passing the array as a prop called 'data' */}
      <PB307 data={peopleArray} />
    </div>
  );
}

export default Pb307_2