import './App.css';
import { useState } from 'react';
// import error from './images/icon-error.svg';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  const handleInputChange = (e) => {
    setFirstName(e.target.value);
    setIsEmpty(false); // Reset isEmpty when the input changes
  };
  const handleSubmit = (e) => {
    if (firstName.trim() === '') {
      setIsEmpty(true);
    }
    if (lastName.trim() === '') {
      setIsEmpty(true);
    }
  };
  const handleOtherButtonClick = () => {
    handleSubmit(); // Trigger form submission logic
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
              onChange={handleInputChange}
              style={{ borderColor: isEmpty ? 'red' : 'initial' }}
            />
            {isEmpty && 
              <p style={
                { 
                  color: 'red', 
                  marginTop: '-12px',
                  fontSize: '11px',
                  fontStyle: 'italic',
                  color: '#FF7979',
                  textAlign: 'right',
                  marginBottom: '10px'
                }}>
                First Name cannot be empty
              </p>
            } 
          </form>
          {/* Last name */}
          <form onSubmit={handleSubmit}>
            <input 
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={handleInputChange}
              style={{ borderColor: isEmpty ? 'red' : 'initial' }}
            />
            {isEmpty && 
              <p style={
                { 
                  color: 'red', 
                  marginTop: '-12px',
                  fontSize: '11px',
                  fontStyle: 'italic',
                  color: '#FF7979',
                  textAlign: 'right',
                  marginBottom: '10px'
                }}>
                Last Name cannot be empty
              </p>
            } 
          </form>
          {/* Email */}
          <form onSubmit={handleSubmit}>
            <input 
              type='text'
              placeholder='Email'
              value={email}
              onChange={handleInputChange}
              style={{ borderColor: isEmpty ? 'red' : 'initial' }}
            />
            {isEmpty && 
              <p style={
                { 
                  color: 'red', 
                  marginTop: '-12px',
                  fontSize: '11px',
                  fontStyle: 'italic',
                  color: '#FF7979',
                  textAlign: 'right',
                  marginBottom: '10px'
                }}>
                Looks like this is not an email
              </p>
            } 
          </form>
          {/* Password */}
          <form onSubmit={handleSubmit}>
            <input 
              type='text'
              placeholder='Password'
              value={password}
              onChange={handleInputChange}
              style={{ borderColor: isEmpty ? 'red' : 'initial' }}
            />
            {isEmpty && 
              <p style={
                { 
                  color: 'red', 
                  marginTop: '-12px',
                  fontSize: '11px',
                  fontStyle: 'italic',
                  color: '#FF7979',
                  textAlign: 'right',
                  marginBottom: '10px'
                }}>
                Password cannot be empty
              </p>
            } 
          </form>

          {/* Claim button */}
          <button onClick={handleOtherButtonClick} className='claim-btn'>CLAIM YOUR FREE TRIAL</button>
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
}

export default App;
