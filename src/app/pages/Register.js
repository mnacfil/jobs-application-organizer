import React from 'react';
import styled from 'styled-components';
import { FormInput, AppLogo } from '../components';

const Register = () => {
  const handleChange = (e) => {
    console.log("handle change");
  }
  const handleSubmit = (e) => {
    console.log("handle submit");
  }
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <AppLogo />
        <h3>Register</h3>
        <FormInput 
          label='Name'
          value=''
          handleChange={handleChange}
          type='text'
        />
        <FormInput 
          label='Email'
          value=''
          handleChange={handleChange}
          type='email'
        />
        <FormInput 
          label='Password'
          value=''
          handleChange={handleChange}
          type='password'
        />
        <button
          className='btn btn-block submit-btn'
        >
          Submit
        </button>
        <button
          className='btn btn-block demo-btn'
        >
          Demo App
        </button>
        <p>
          Already a member?
          <button className='toggle-btn'>Login</button>
        </p>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  min-height: 100vh;
  .form {
    width: 400px;

    header {
      text-align: center;
      h2 {
        margin: 0;
      }
    }

    h3 {
      text-align: center;
    }

    .submit-btn {
      margin: 1rem 0;
    }
    .demo-btn {
      background-color: var(--primary-200);
      color: var(--primary-700);
    }
    p {
      text-align: center;
    }
    .toggle-btn {
      color: var(--primary-500);
      border: none;
      background: none;
      cursor: pointer;
      letter-spacing: 1px;
    }
  }
`;

export default Register