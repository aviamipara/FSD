import React from 'react';
import Example2 from './312_3';

function Example(props) {
  return (
    <div>
      {/* Forwarding the props down to Example2 */}
      <Example2 
        bgColor={props.bgColor}
        fontSize={props.fontSize}
        fontStyle={props.fontStyle}
        textTransform={props.textTransform}
      />
    </div>
  );
}

export default Example;