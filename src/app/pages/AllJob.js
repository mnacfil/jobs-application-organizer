import React, { useEffect } from 'react'
import styled from 'styled-components'
import { FormInput, FormSelect, AllJobContainer } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange, getAllJob } from '../features/job/jobSlice'

const AllJob = () => {
  const dispatch = useDispatch();
  const { searchForm } = useSelector(store => store.job);
  const { 
    statuses, 
    types, 
    sorts, 
    searchFilter: {
      search,
      status,
      type,
      sort
    },
    allJob,
    totalJob,
    numberOfPage,
    isSearchLoading 
  } = searchForm;

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ newData: { name, value }, originPage: 'all-job' }));
  }
  const handleSubmit = (e) => {
    console.log(e.target);
  }

  useEffect(() => {
    dispatch(getAllJob())
  }, []);

  return (
    <Wrapper className='dashboard-center'>
        <section className='all-job-form'>
          <h3>Search form</h3>
          <form onSubmit={handleSubmit}>
              <FormInput
                name='search' 
                label='Search'
                type="text"
                value={search}
                handleData={handleData}
                />
              <FormSelect 
                name='status'
                label='Status'
                options={statuses}
                value={status}
                handleData={handleData}
                />
              <FormSelect
                name='type'
                label='Type'
                options={types}
                value={type}
                handleData={handleData}
                />
              <FormSelect
                name='sort'
                label='Sort'
                options={sorts}
                value={sort}
                handleData={handleData}
                />
              <button 
                className='clear-filter-btn btn btn-block'
                >
                Clear Filters
              </button>
          </form>
        </section>
        <AllJobContainer 
          allJob={allJob} 
          totalJob={totalJob}
          loading={isSearchLoading}
          />
    </Wrapper>
  )
}

const Wrapper = styled.div`

.all-job-form {
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

}

/* All-job-section */
.all-job-section {
  margin-top: 3rem;

  .all-job-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
      .job {
        background-color: var(--white);
        padding: 1.5rem;
        box-shadow: var(--shadow-2);
        border-radius: var(--borderRadius);
          header {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
            h4,p {
              margin: 0;
            }
            h4 {
              color: var(--textColor);
            }
            p {
              color: var(--grey-400);
              letter-spacing: var(--letterSpacing);
            }
            .company-initial {
              background-color: var(--primary-500);
              color: var(--white);
              font-weight: 800;
              font-size: 1.5rem;
              padding: 0.7rem 1.4rem;
              border-radius: var(--borderRadius);
              margin-right: 2rem;
            }
            .skeleton-loading-company-initial {
              background: none;
            }
          }
          .application-data {
    
            color: var(--textColor);
            letter-spacing: var(--letterSpacing);
    
            .edit-btn {
              margin-right: 1rem;
              background-color: var(--green-light);
              color: var(--green-dark);
            }
            .delete-btn {
              background-color: var(--red-light);
              color: var(--red-dark);
            }
            .skeleton-loading-btn {
              background: none;
              box-shadow: none;
            }
    
            @media screen and (min-width: 576px){
              .first-data, .second-data {
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
            }
          }
      }
  }
}
`;

export default AllJob
