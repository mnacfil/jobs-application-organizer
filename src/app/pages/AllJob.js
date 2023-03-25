import React from 'react'
import styled from 'styled-components'
import { FormInput, FormSelect } from '../components';

// search, status, type, sort, clear-filter-btn

const status = ['all', 'Interviewed', 'Declined', 'Pending', 'Job Offer'];
const types = ['all', 'Full-time', 'Part-time', 'Remote', 'Internship'];
const sorts = ['latest', 'oldest', 'a-z', 'z-a'];

const AllJob = () => {
  const handleChange = (e) => {
    console.log(e.target);
  }
  const handleSubmit = (e) => {
    console.log(e.target);
  }
  return (
    <Wrapper className='dashboard-center'>
        <form onSubmit={handleSubmit} className="form">
            <h2>Search form</h2>
            <FormInput 
              label='Search'
              type="text"
              value=''
              handleChange={handleChange}
              />
            <FormSelect 
              label='Status'
              options={status}
              value=''
              handleChange={handleChange}
              />
            <FormSelect 
              label='Type'
              options={types}
              value=''
              handleChange={handleChange}
              />
            <FormSelect 
              label='Sort'
              options={sorts}
              value=''
              handleChange={handleChange}
              />
            <button className='clear-btn btn btn-block'>
              Clear Filters
            </button>
        </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  

  form {

    .clear-btn {
      width: 100%;
      background-color: var(--red-light);
      color: var(--red-dark);
      font-weight: 500;
    }
  }

  /* @media screen and (min-width: 768px){
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  } */
`;

export default AllJob
