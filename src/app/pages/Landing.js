import React from 'react';
import {AppLogo} from '../components';
import styled from 'styled-components';
import LandingImage from '../../assets/image/landing-pic.svg'


const Landing = () => {
  return (
    <Wrapper>
      <AppLogo />
      <div className='landing-container'>
        <article>
          <h1>Job <span>Organizing</span> App</h1>
          <p>
          A job organizing app is a software application that helps individuals or organizations to manage and organize their work-related tasks, projects, schedules, and agendas in a more efficient and effective manner. These apps provide features such as task lists, project workflows, calendars, reminders, collaboration tools, and reporting capabilities to help users stay on top of their professional commitments and achieve their goals.
          </p>
          <button 
            className='btn login-register-btn'
            >
              Login/Register
          </button>
        </article>
        <div>
          <img src={LandingImage} alt='landing image'/>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`

  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);

  .landing-container {

    article {
      padding-top: 12rem;

      p {
        color: var(--grey-600);
        max-width: 35rem;
      }
      h1 {
        font-weight: 700;
  
        span {
          color: var(--primary-500);
        }
      }
      button {
        height: 40px;
        font-size: 1.1rem;
        padding: 0 1.25rem;
      }

    }

    div {
      display: none;
    }
  }

  @media screen and (min-width: 992px){
    .landing-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: center;
      min-height: 90vh;

      article {
        padding-top: 0;

        button {
          font-size: 1.25rem;
        }
      }
      div {
        display: block;
      }
    }
  }

`;

export default Landing
