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
        <h3>Search form</h3>
        <form onSubmit={handleSubmit}>
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
            <button className='clear-filter-btn btn btn-block'>
              Clear Filters
            </button>
        </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--white);
  padding: 2.5rem 2rem;
  border-radius: 5px;
  box-shadow: var(--shadow-2);
  transition: var(--transition);

  &:hover {
    box-shadow: var(--shadow-4);
  }

  form {

    .clear-filter-btn {
      margin-top: 0.5rem;
      width: 100%;
      background-color: var(--red-light);
      color: var(--red-dark);
      font-weight: 500;
    }
  }

  @media screen and (min-width: 768px){
    form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px){
    form {
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;

      .clear-filter-btn {
        margin-top: 1.1rem;
      }
    }
  }
`;

export default AllJob
