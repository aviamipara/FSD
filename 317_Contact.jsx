import React from 'react';

function Contact() {
  return (
    <div>
      <h2>Contact Details</h2>
      {/* Displays contact details with inline styles forcing blue font color */}
      <div style={{ color: 'blue' }}>
        <p>Email: support@lju.edu</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: LJU Campus, University Road</p>
      </div>
    </div>
  );
}

export default Contact;