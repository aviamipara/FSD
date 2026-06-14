import React from 'react';
import PeopleList from './316';

function App() {
  // 1) Array of objects containing names and ages of people
  const people = [
    { name: "John Doe", age: 28 },
    { name: "Sarah Jenkins", age: 45 },
    { name: "Michael Smith", age: 34 },
    { name: "Emily Davis", age: 22 },
    { name: "David Miller", age: 51 },
    { name: "Jessica Taylor", age: 39 }
  ];

  // 2) Filtering the array to find people with an age less than 40
  const filteredPeople = people.filter(function(person) {
    return person.age < 40;
  });

  return (
    <div>
      <h1>Directory Filter App</h1>
      <hr />
      <PeopleList list={filteredPeople} />
    </div>
  );
}

export default App;