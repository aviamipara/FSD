// Write react js script to perform the tasks as asked below.
// Add an array of objects which contains name and age of people. 
// Apply filter to find people with age less than 40. And display name of all people using map 
// function.  Use props.

import React from 'react';

function PB307(props) {
  // Filter out people who are 40 or older (keep age < 40)
  const filteredPeople = props.data.filter(person => person.age < 40);

  return (
    <div>
      <h3>People Under 40:</h3>
      <ul>
        {filteredPeople.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PB307