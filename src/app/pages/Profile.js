import React from 'react'
import styled from 'styled-components'
import { FormInput, FormSelect } from '../components'

const Profile = () => {
  const handleChange = (e) => {
    console.log(e.target);
  }
  const handleSubmit = (e) => {
    console.log(e.target);
  }
  return (
    <Wrapper className='dashboard-center'>
      <h2>Profile Job</h2>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label='First Name'
          type='text'
          value=''
          handleChange={handleChange}
        />
        <FormInput 
          label='Last Name'
          type='text'
          value=''
          handleChange={handleChange}
        />
        <FormInput 
          label='Email'
          type='email'
          value=''
          handleChange={handleChange}
        />
        <FormInput 
          label='Location'
          type='text'
          value=''
          handleChange={handleChange}
        />
        <button className='save-btn btn btn-block'>Save Changes</button>
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