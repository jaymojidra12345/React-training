import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import { app } from '../firebase'

import { useNavigate } from 'react-router-dom';

const auth = getAuth(app)

const SignUp = () => {
  const Navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <StyledWrapper>
      <form className="form" >
        <p className="form-title">Sign up to your account</p>
        <div className="input-container">
          <input type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} required />
          <span>
          </span>
        </div>
        <div className="input-container">
          <input type="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)}
            required />
        </div>
        <button type="submit" className="submit" onClick={() => {
          createUserWithEmailAndPassword(auth, email, password)
            .then(res => { console.log(res) })
            .catch(err => console.log(err))

          signInWithEmailAndPassword(auth, email, password)
            .then(res => { console.log(res) })
            .catch(err => console.log(err))

          alert("User added successfully");
          Navigate("/notes")
        }
        }>
          Sign up
        </button>

      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form {
    background-color: #fff;
    display: block;
    padding: 1rem;
    max-width: 350px;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .form-title {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    text-align: center;
    color: #000;
  }

  .input-container {
    position: relative;
  }

  .input-container input, .form button {
    outline: none;
    border: 1px solid #e5e7eb;
    margin: 8px 0;
  }

  .input-container input {
    background-color: #fff;
    padding: 1rem;
    padding-right: 3rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 300px;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  .submit {
    display: block;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    background-color: #4F46E5;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    width: 100%;
    border-radius: 0.5rem;
    text-transform: uppercase;
  }

  .signup-link {
    color: #6B7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
  }

  .signup-link a {
    text-decoration: underline;
  }`;


export default SignUp