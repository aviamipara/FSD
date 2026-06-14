import React from 'react';

function About() {
  const branches = ['CSE', 'IT', 'CE'];

  return (
    <div>
      <h2>About Our University</h2>
      <p>We offer specialized engineering programs in the following branches:</p>
      <ul>
        {branches.map((branch, index) => (
          <li key={index}>
            {branch}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;