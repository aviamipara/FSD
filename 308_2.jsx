import React from 'react';
import PB308 from './308';

function Pb308_2() {
  // Array of objects containing name and age
  const studentData = [
    { name: 'Rahul', branch: 'CSE' },
    { name: 'Anjali', branch: 'IT' },
    { name: 'Amit', branch: 'CE' },
    { name: 'Priya', branch: 'CSE' },
    { name: 'Sneha', branch: 'IT' },
    { name: 'Vikram', branch: 'CSE' }
  ];

  return (
    <div>
      <h2>User Directory Filter</h2>
      {/* Passing the array as a prop called 'data' */}
      <PB308 data={studentData} />
    </div>
  );
}

export default Pb308_2