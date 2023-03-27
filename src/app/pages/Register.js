import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FormInput, AppLogo } from '../components';
import { useDispatch, useSelector } from 'react-redux'
import { 
  handleChange, 
  loginUser, 
  registerUser,
  toggleUserAction
} from '../features/user/userSlice';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isLogin } = useSelector(store => store.user);
  const { name, email, password } = user;
  const [ userAction, setUserAction ] = useState('login');

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password || (user.action === 'register' && !name)) {
      toast.error('Plese fill out all field.');
      return;
    }
    // if user already register
    if(user.action === 'login') {
      dispatch(loginUser({ email, password }));
      return;
    }
    // then register the user
    dispatch(registerUser({ name, email, password }));
  }

  const handleUserAction = () => {
    if(userAction === 'login') {
      setUserAction('register');
    } else {
      setUserAction('login');
    }
    dispatch(toggleUserAction(userAction));
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
      <h3>{ user.action === 'login' ? 'Login': 'Register'}</h3>
      <form onSubmit={handleSubmit}>
        {
          user.action === 'register' && 
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
          {user.action === 'login' ? 'Not a member yet?' : 'Already a member?'}
          <button 
            className='toggle-btn'
            onClick={handleUserAction}
            >
            {user.action === 'login' ? 'Register' : 'Login'}
          </button>
        </p>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background-color: var(--white);
  margin: 0 auto;
  width: 400px;
  padding: 1rem 2rem;
  margin-top: 10rem;
  box-shadow: var(--shadow-2);
  border-radius: var(--borderRadius);
  transition: var(--transition);

  &:hover {
    box-shadow: var(--shadow-4);
  }
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
`;

export default Register