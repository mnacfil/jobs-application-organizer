import React from 'react';
import styled from 'styled-components';
import { FormInput, AppLogo } from '../components';
import { useDispatch, useSelector } from 'react-redux'
import { toggleIsAlreadyRegister, handleChange, loginUser } from '../features/user/userSlice';
import {toast} from 'react-toastify';

const Register = () => {
  const dispatch = useDispatch();
  const { isAlreadyRegister, user, isLoading } = useSelector(store => store.user);

  const handleData = (e) => {
    const name = e.target.name;
    console.log(name);
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit");
  }
  const login = () => {
    if(!user.email || !user.password) return toast.error('Please fill out all field.');
    dispatch(loginUser({emai: user.email, password: user.password }));
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
          value={user.name}
          handleData={handleData}
          type='text'
          name='name'
          />
        }
        <FormInput 
          label='Email'
          value={user.email}
          handleData={handleData}
          type='email'
          name='email'
        />
        <FormInput 
          label='Password'
          value={user.password}
          handleData={handleData}
          type='password'
          name='password'
        />
        <button
          className='btn btn-block submit-btn'
          onClick={login}
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

      &:focus {
        outline: none;
      }
    }
  }
`;

export default Register