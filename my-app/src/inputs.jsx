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
    // 
    if (firstName.trim() === '') {
      // Input is empty, set inputError to true
      setInputError(true);
    } else {
      // Input is not empty, reset inputError to false
      setInputError(false);
      // Handle form submission or any other action here
    }
  };

  return (
  <>
    <input 
      type='text'
      placeholder='First Name'
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      style={{ borderColor: inputError ? '#FF7979' : '' }}
    />
    {inputError && <p style={{ color: 'red' }}>First Name cannot be empty</p>}
    <input 
      type='text'
      placeholder='Last Name'
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
    />
    <input 
      type='text'
      placeholder='Email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}    
      style={emailStyles}
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
