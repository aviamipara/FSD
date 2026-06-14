
// Create react app and use routing functionality of react to perform the tasks as asked.
// Create one file named Main.js which contains links for home and about page and routing 
// functionality.
// In Home.js file add one image and heading(h1) "LJ University"
// In About.js file add branch list (CSE,IT,CE). 

import React from 'react';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>LJ University</h1>
      <img 
        src="https://picsum.photos/600/300" 
        alt="LJ University Campus" 
        style={{ borderRadius: '8px', marginTop: '15px', maxWidth: '100%' }}
      />
    </div>
  );
}

export default Home;