// Write react js script to perform the task as below using function component:
// •	Create array of objects which have id, name & city of person.
// •	Display id & name of persons having city name “Ahmedabad” . Use props.
// No need to write App.js file. 


import React from 'react';

function PersonList() {
  // 1) Array of objects containing id, name & city of each person
  const people = [
    { id: 101, name: "Aarav Sharma", city: "Ahmedabad" },
    { id: 102, name: "Priya Patel", city: "Mumbai" },
    { id: 103, name: "Rohan Mehta", city: "Ahmedabad" },
    { id: 104, name: "Ananya Iyer", city: "Delhi" },
    { id: 105, name: "Diya Shah", city: "Ahmedabad" }
  ];

  // 2) Filtering the array to find people living in "Ahmedabad"
  const ahmedabadResidents = people.filter(function(person) {
    // using toLowerCase() to prevent case-sensitive mismatches
    return person.city.toLowerCase() === "ahmedabad";
  });

  return (
    <div>
      <h2>Residents of Ahmedabad:</h2>      
        <ul>
          {ahmedabadResidents.map(function(person) {
            return (
              <li key={person.id}>
                ID: {person.id} | Name: {person.name}
              </li>
            );
            
          })}
        </ul>
    </div>
  );
}

export default PersonList;