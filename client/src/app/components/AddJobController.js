import React from 'react';
import styled from 'styled-components';

const AddJobController = ({ isloading, isediting, handleSubmit, handleClear }) => {
  return (
    <Wrapper>
        <div className='addJob-controller'>
            <button 
              className='clear-btn btn' 
              type='button'
              onClick={handleClear}
            >
              Clear
            </button>
            <button 
              className='submit-btn btn'
              disabled={isloading}
              type='button'
              onClick={handleSubmit}
            >
              { isloading 
                ? (isediting ? 'Saving...': 'Adding') 
                : 
                (isediting ? 'Save Job' : 'Add Job')}
            </button>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 2rem;
  text-align: center;

  .clear-btn {
    margin-right: 1rem;
  }
`

export default AddJobController;