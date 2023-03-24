import React from 'react'
import styled from 'styled-components'
import { FormInput, FormSelect } from '../components'

const status = ['Pending', 'Interviewed', 'Declined', 'Job Offer']
const jobTypes = ['Full-time', 'Part-time', 'Remote', 'Internship']

const AddJob = () => {

  const handleChange = (e) => {
    console.log(e.target.name)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Wrapper className='dashboard-center'>
      <h2>Add job</h2>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Position"
          value=""
          handleChange={handleChange}
          type="text"
          />
        <FormInput 
          label="Company"
          value=""
          handleChange={handleChange}
          type="text"
          />
        <FormInput 
          label="Job Location"
          value=""
          handleChange={handleChange}
          type="text"
          />
        <FormSelect 
          value="Pending"
          handleChange={handleChange}
          options={status}
          label='Status'
        />
        <FormSelect 
          value="Full-time"
          handleChange={handleChange}
          options={jobTypes}
          label='Job Type'
        />
        <div className='form-controller'>
          <button className='clear-btn btn'>Clear</button>
          <button className='submit-btn btn'>Submit</button>
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--white);
  padding: 3rem 2rem;
  box-shadow: var(--shadow-2);
  border-radius: 5px;
  width: 80%;
  form {

    label {
      letter-spacing: var(--letterSpacing);
      color: var(--grey-700);
    }

    .form-controller {
      margin-top: 2rem;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;

      .clear-btn {
        background-color: var(--grey-500);
      }

    }
  }

  @media screen and (min-width: 992px){
    width: 90%;
    form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
  @media screen and (min-width: 1120px){
    form {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default AddJob
