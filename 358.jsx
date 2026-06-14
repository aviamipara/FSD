
//  Write a program to build React app having 2 input text fields (First name 
// and last name) and display the entered value on the same page.


import { useState } from 'react';

function PB358() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div>
      <h2>Name Form</h2>
      
      <label>First Name: </label>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      <br />

      <label>Last Name: </label>
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>

      <h3>Entered Values:</h3>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Full Name: {firstName} {lastName}</p>
    </div>
  );
}

export default PB358