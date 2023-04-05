import React from 'react';
import styled from 'styled-components';
import notFoundImg from '../../assets/image/notfound.svg'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper>
      <div className="errorPage-container">
        <div>
          <img src={notFoundImg} alt="Not found image" />
        </div>
        <p>
          Oops! This is akward... You are looking for something that doesnt acually exist.
        </p>
        <Link to='/' className='btn'>Go back my friend</Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`

  display: grid;
  place-items: center;
  min-height: 100vh;
  text-align: center;

  .errorPage-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100%;
    }

    p {
      max-width: 30rem;

      font-size: 1.25rem;
    }

    @media screen and (min-width: 992px) {
      p {
        font-size: 1.5rem;
        max-width: 40rem;
      }
    }

  }
`;

export default Error;
