import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FormInput, AppLogo } from '../components';
import { useDispatch, useSelector } from 'react-redux'
import { toggleIsAlreadyRegister, handleChange, loginUser } from '../features/user/userSlice';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isLogin } = useSelector(store => store.user);
  const { isAlreadyRegister, name, email, password } = user;

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password || (!isAlreadyRegister && !name)) {
      toast.error('Plese fill out all field.');
      return;
    }
    // if user already register
    if(isAlreadyRegister) {
      dispatch(loginUser({ email, password }));
      return;
    }
    // then register the user
  }

  useEffect(() => {
    // after the user login, progmmatically navigate user to root/home page
    console.log("navigate user");
    if(isLogin) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [isLogin]);

  return (
    <Wrapper>
      <AppLogo />
      <h3>{ isAlreadyRegister ? 'Login': 'Register'}</h3>
      <form className='form' onSubmit={handleSubmit}>
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
        >
          {isLoading ? 'loading...' : 'Submit'}
        </button>
        <button
          className='btn btn-block demo-btn'
        >
          Demo App
        </button>
      </form>
        <p>
          {isAlreadyRegister ? 'Not a member yet?' : 'Already a member?'}
          <button 
            className='toggle-btn'
            onClick={() => dispatch(toggleIsAlreadyRegister())}
            >
            {isAlreadyRegister ? 'Register' : 'Login'}
          </button>
        </p>
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