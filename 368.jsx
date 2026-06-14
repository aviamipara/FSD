// Create a Sign-up form using React asking for username, age, email, 
// password, and confirm password. When the user clicks on the ‘submit’ 
// button, it will display an alert box with a username, age, and email details 
// entered by the user.



import { useState } from 'react';

function PB368() {
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  function updateField(event) {
    const { name, value } = event.target;
    
    setFormData(function (previousData) {
      return {
        ...previousData,
        [name]: value
      };
    });
  }

  function passwordsMatch() {
    return formData.password === formData.confirmPassword;
  }

  function displayUserSummary() {
    alert(
      "Sign-up Successful!\n\n" +
      "Username: " + formData.username + "\n" +
      "Age: " + formData.age + "\n" +
      "Email: " + formData.email
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!passwordsMatch()) {
      alert("Passwords do not match!");
      return;
    }

    displayUserSummary();
  }

  return (
    <div>
      <h2>Sign Up Form</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label>Username: </label>
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={updateField} 
            required 
          />
        </div>
        <br />

        <div>
          <label>Age: </label>
          <input 
            type="number" 
            name="age" 
            value={formData.age} 
            onChange={updateField} 
            required 
          />
        </div>
        <br />

        <div>
          <label>Email: </label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={updateField} 
            required 
          />
        </div>
        <br />

        <div>
          <label>Password: </label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={updateField} 
            required 
          />
        </div>
        <br />

        <div>
          <label>Confirm Password: </label>
          <input 
            type="password" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={updateField} 
            required 
          />
        </div>
        <br />

        <button type="submit" onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default PB368