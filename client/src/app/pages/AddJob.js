import React from 'react'
import styled from 'styled-components'
import { FormInput, FormSelect, Recruiter, AddJobController } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { handleChange, createJob, editJob, clearAddJobInput } from '../features/job/jobSlice'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {job, searchForm: {isEditing, editID}} = useSelector(store => store.job)
  const {
    statusOptions, 
    jobTypeOptions,
    position,
    company,
    jobLocation,
    jobType,
    jobStatus,
    isLoading,
    recruiterName,
    recruiterEmail,
    recruiterNumber,
  } = job;

  const handleDataInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ newData: { name, value }, originPage: 'add-job'}));
  }

  const handleClearInput = () => {
    dispatch(clearAddJobInput());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const job = { 
      position, 
      company, 
      jobLocation, 
      jobStatus, 
      jobType,
      recruiter: {
        name: recruiterName,
        email: recruiterEmail,
        contactNumber: recruiterNumber
      } 
    }
    if(!position || !company || !jobLocation) {
      toast.error('Please fill out all required field.');
      return;
    }
    if(isEditing) {
      dispatch(editJob({ editID, job }));
      navigateToAllJobPage()
      return;
    }
    dispatch(createJob(job));
    navigateToAllJobPage()
  }

  const navigateToAllJobPage = () => {
    setTimeout(() => {
      navigate('/all-job');
    }, 2000)
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
          name='jobStatus' 
          value={jobStatus}
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
      </form>
      <Recruiter 
        handleData={handleDataInput}
        recruiterName={recruiterName}
        recruiterEmail={recruiterEmail}
        recruiterNumber={recruiterNumber}
        />
      <AddJobController 
        isediting={isEditing}
        isloading={isLoading}
        handleSubmit={handleSubmit}
        handleClear={handleClearInput}
      />
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
