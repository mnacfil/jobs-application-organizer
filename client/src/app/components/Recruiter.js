import React from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';
import recruiterImg from '../../assets/image/recruiter.svg';
 
const Recruiter = ({ handleData, recruiterName, recruiterEmail, recruiterNumber}) => {
  return (
    <Wrapper>
        <h4>Recruiter Detail <span>(Optional)</span></h4>
        <div className="recruiter-container">
            <div className='recruiter-inputs'>
                <FormInput 
                    type='text'
                    name='recruiterName'
                    label='Name'
                    value={recruiterName}
                    handleData={handleData}
                />
                <FormInput 
                    type='email'
                    name='recruiterEmail'
                    label='Email'
                    value={recruiterEmail}
                    handleData={handleData}
                />
                <FormInput 
                    type='text'
                    name='recruiterNumber'
                    label='Contact Number'
                    value={recruiterNumber}
                    handleData={handleData}
                />
            </div>
            <div className='recruiter-img'>
                <img src={recruiterImg} alt="recruiter image" />
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
    margin-top: 2rem;

    h4 {
        span {
            color: var(--grey-300);
        }
    }

    .recruiter-container {
        .recruiter-img {
            display: none;
            img {
                width: 100%;
            }
        }
    }

    @media screen and (min-width: 998px) {
        .recruiter-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 1rem;
        }
        .recruiter-img {
            display: block !important;
        }
    }
`;

export default Recruiter