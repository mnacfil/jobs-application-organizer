import React from 'react';
import styled from 'styled-components';

const AddJobController = ({ isloading, isediting }) => {
  return (
    <Wrapper>
        <div className='addJob-controller'>
            <button 
              className='clear-btn btn' 
              type='button'
            >
              Clear
            </button>
            <button 
              className='submit-btn btn'
              disabled={isloading}
              type='submit'
            >
              { isediting ? 'Save Job' : 'Add Job'}
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