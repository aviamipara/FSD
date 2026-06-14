// Write a program to create function based ReactJS app having an array of 6 people having 
// mentioned age [70,83,38,65,49,94] and display list of people whose age is greater than 60 
// using filter method. Also display total count of people whose age is greater than 60 on the same 
// page. Use props.


import React from 'react';

function FilteredList(props) {
  return (
    <div>
      <h2>Total number of people over 60: {props.totalCount}</h2>
      
      <h3>List of Ages:</h3>
      <ul>
        {props.agesList.map(function(age, index) {
          return (
            <li key={index}>
              Person {index + 1}: {age} years old
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FilteredList;