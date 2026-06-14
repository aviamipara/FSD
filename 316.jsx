// Write react js script to perform the tasks as asked below using functional component:
// 1)Add an array of objects which contains name and age of people. 
// 2)Apply filter to find people with age less than 40. And display name of all people using map 
// function. Use props.


import React from 'react';

function PeopleList(props) {
  return (
    <div>
      <h2>People Under 40 Years Old:</h2>
      <ul>
        {props.list.map(function(person, index) {
          return (
            <li key={index}>
              {person.name} ({person.age} years old)
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PeopleList;