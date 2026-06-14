import React from 'react';
import PB306 from './306';

function PB306_2() {
  return (
    <div>
      {/* Passing style attributes as individual props */}
      <PB306
        textColor="red" 
        bgColor="yellow" 
        size="25px" 
        fontStyle="italic" 
      />
    </div>
  );
}

export default PB306_2