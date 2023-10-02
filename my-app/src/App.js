import './App.css';
import { useState } from 'react';
// import error from './images/icon-error.svg';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !password) {
        alert('Please fill in all fields.');
      } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
      } else {
        alert('Form submitted successfully!');
      }
    }

  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // return emailRegex.test(email);
  };

  return (
    <>
      {/* Info box */}
      <header>
        <h1>Learn to code by watching others</h1>
        <h4>
          See how experienced developers solve 
          problems in real-time. Watching scripted 
          tutorials is great, but understanding 
          how developers think is invaluable. 
        </h4>
      </header>
      {/* Offer box */}
      <section>
        <div className='purple-div'>
          <p className='purple-div-p'>
            <b>Try it free 7 days </b>
            then $20/mo. thereafter
          </p>
        </div>
        {/* Input box */}
        <div className='white-box'>
          {/* First name */}
          <form onSubmit={handleSubmit}>
            <input 
              type='text'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => handleInputChange(e, setFirstName)}
              style={firstName ? { border: '1px solid red' } : {}}
              />
          </form>
          {/* Last name */}
          <form onSubmit={handleSubmit}>
            <input 
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => handleInputChange(e, setLastName)}
              style={lastName ? { border: '1px solid red' } : {}}
              />
          </form>
          {/* Email */}
          <form onSubmit={handleSubmit}>
            <input 
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
              style={email ? { border: '1px solid red' } : {}}
              />
          </form>
          {/* Password */}
          <form onSubmit={handleSubmit}>
            <input 
              type='text'
              placeholder='Password'
              value={password}
              onChange={(e) => handleInputChange(e, setPassword)}
              style={password ? { border: '1px solid red' } : {}}
              />
          </form>

          {/* Claim button */}
          <button onClick={handleSubmit} className='claim-btn'>CLAIM YOUR FREE TRIAL</button>
          {/* Terms and Services */}
          <p className='terms-and-services'>
            By clicking the button, you are 
            agreeing to our 
              <b className='orange-bold-txt'> Terms and Services</b>
          </p>
        </div>
      </section>
    </>
  );
};


export default App;
