import React from 'react';
import styled from 'styled-components';
import { FormInput, AppLogo } from '../components';
import { useDispatch, useSelector } from 'react-redux'
import { toggleIsAlreadyRegister } from '../features/user/userSlice';

const Register = () => {
  const dispatch = useDispatch();
  const { isAlreadyRegister } = useSelector(store => store.user)

  const handleChange = (e) => {
    console.log("handle change");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit");
  }
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <AppLogo />
        <h3>{ isAlreadyRegister ? 'Login': 'Register'}</h3>
        {
          !isAlreadyRegister && 
          <FormInput 
          label='Name'
          value=''
          handleChange={handleChange}
          type='text'
          />
        }
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
          {isAlreadyRegister ? 'Not a member yet?' : 'Already a member?'}
          <button 
            className='toggle-btn'
            onClick={() => dispatch(toggleIsAlreadyRegister())}
            >
            {isAlreadyRegister ? 'Register' : 'Login'}
          </button>
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