import React from 'react'
import styled from 'styled-components'
import { FormInput, FormSelect } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { handleChange, createJob, editJob } from '../features/job/jobSlice'

const AddJob = () => {
  const dispatch = useDispatch();
  const {job, searchForm: {isEditing, editID}} = useSelector(store => store.job)
  const {
    statusOptions, 
    jobTypeOptions,
    position,
    company,
    jobLocation,
    jobType,
    status,
    isLoading
  } = job;

  const handleDataInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ newData: { name, value }, originPage: 'add-job'}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const job = { position, company, jobLocation, status, jobType }
    if(isEditing) return dispatch(editJob({ editID, job }));
    dispatch(createJob(job));
  }

  return (
    <Wrapper className='dashboard-center'>
      <h3>{isEditing ? 'Edit Job' : 'Add Job'}</h3>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='position'
          label="Position"
          value={position}
          handleData={handleDataInput}
          type="text"
          />
        <FormInput 
          name='company'
          label="Company"
          value={company}
          handleData={handleDataInput}
          type="text"
          />
        <FormInput 
          name='jobLocation'
          label="Job Location"
          value={jobLocation}
          handleData={handleDataInput}
          type="text"
          />
        <FormSelect
          name='status' 
          value={status}
          handleData={handleDataInput}
          options={statusOptions}
          label='Status'
        />
        <FormSelect
          name='jobType' 
          value={jobType}
          handleData={handleDataInput}
          options={jobTypeOptions}
          label='Job Type'
        />
        <div className='form-controller'>
          <button 
            className='clear-btn btn btn-block' 
            type='button'
          >
            Clear
          </button>
          <button 
            className='submit-btn btn btn-block'
            disabled={isLoading}
          >
              { isEditing ? 'Save' : 'Submit'}
          </button>
        </div>
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

      .form-controller {
        margin-top: 2.2rem;
      }
    }
  }
  @media screen and (min-width: 1120px){
    form {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default AddJob
