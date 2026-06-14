// Write react js script to perform the tasks as asked below.
// Add an array of objects which contains name and branch(CSE,IT,CE) of students. 
// Apply filter to find students who are from CSE branch. And display name of all studens of CSE 
// branch using map function. 


import React from 'react';

function PB308(props) {

  const filterstudentData = props.data.filter(std => std.branch === 'CSE' );

  return (
    <div>
      <h3>Student Branch is CSE</h3>
      <ul>
        {filterstudentData.map((std, index) => (
          <li key={index} >{std.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PB308