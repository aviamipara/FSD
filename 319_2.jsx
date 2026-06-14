import React from 'react';
import File1 from './319';

function App() {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      
      {/* Rendering File1 and defining its property values */}
      <File1 productName="Mechanical Keyboard" price={89.99} />
    </div>
  );
}

export default App;