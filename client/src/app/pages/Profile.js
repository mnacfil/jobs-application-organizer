import React from 'react'
import styled from 'styled-components'
import { FormInput } from '../components'
import { handleChange, updateUser } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Profile = () => {
  const dispatch = useDispatch();
  const { 
    user: { firstName, lastName, email, location },
    isLoading
  } = useSelector(store => store.user);

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({name, value}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!firstName || !lastName || !email || !location) {
      toast.error('Please fill up all field.')
      return;
    }
    dispatch(updateUser({firstName, lastName, email, location}));
  }
  return (
    <Wrapper className='dashboard-center'>
      <h2>Profile Job</h2>
      <form onSubmit={handleSubmit}>
        <FormInput 
          name='firstName'
          label='First Name'
          type='text'
          value={firstName}
          handleData={handleData}
        />
        <FormInput
          name='lastName'
          label='Last Name'
          type='text'
          value={lastName}
          handleData={handleData}
        />
        <FormInput 
          name='email'
          label='Email'
          type='email'
          value={email}
          handleData={handleData}
        />
        <FormInput 
          name='location'
          label='Location'
          type='text'
          value={location}
          handleData={handleData}
        />
        <button
          type='submit' 
          className='save-btn btn btn-block'>
            {isLoading ? 'Saving Changes...' : 'Save Changes'}
        </button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`

  background-color: var(--white);
  padding: 2.5rem 2rem;
  box-shadow: var(--shadow-2);
  border-radius: 5px;
  width: 80%;

  .save-btn {
    margin-top: 0.75rem;
  }

  @media screen and (min-width: 992px) {
    width: 90%;

    form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
    }
  }

`;

export default Profile