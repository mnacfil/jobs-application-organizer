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
          name="Position"
          value=""
          handleChange={handleChange}
          type="text"
          />
        <FormInput 
          name="Company"
          value=""
          handleChange={handleChange}
          type="text"
          />
        <FormInput 
          name="Job Location"
          value=""
          handleChange={handleChange}
          type="text"
          />
        <FormSelect 
          value="Pending"
          handleChange={handleChange}
          options={status}
        />
        <FormSelect 
          value="Full-time"
          handleChange={handleChange}
          options={jobTypes}
        />
        <div className='form-controller'>
          <button className='control-btn'>Clear</button>
          <button className='control-btn'>Submit</button>
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`;

export default AddJob
