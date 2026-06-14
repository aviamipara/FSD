import React from 'react';

function Example2(props) {
  // Mapping the incoming props to standard CSS property names
  const headingStyle = {
    backgroundColor: props.bgColor,
    fontSize: props.fontSize,
    fontStyle: props.fontStyle,
    textTransform: props.textTransform
  };

  return (
    <div>
      <h1 style={headingStyle}>This is an React Application</h1>
    </div>
  );
}

export default Example2;