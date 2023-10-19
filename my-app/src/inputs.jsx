import React from 'react'
import { useState } from 'react';

export default function Inputs() {
  const [firstName, setFirstName] = useState('');
  const [inputError, setInputError] = useState(false);
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const emailStyles = {
    borderColor: isValidEmail ? '' : '#FF7979',
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
    if (firstName === '') {
      setInputError(true);
    } else {
      setInputError(false);
    }
  };

  return (
  <>
    <input 
      type='text'
      placeholder='First Name'
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
    />
    {inputError && <p className='error-text'>
        First Name cannot be empty
      </p>
    }
    {/* {inputError && <p style={{ color: 'red' }}>Last Name cannot be empty</p>} */}
    <input 
      type='text'
      placeholder='Last Name'
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
    />
    {inputError && <p className='error-text'>
        Last Name cannot be empty
      </p>
    }
    <input 
      type='text'
      placeholder='Email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}    
      // style={emailStyles}
      />
    <input 
      type='password'
      placeholder='Password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <form onSubmit={handleSubmit}>
      <button type='submit' className='claim-btn'>CLAIM YOUR FREE TRIAL</button>
    </form>
  </>
  )
}
