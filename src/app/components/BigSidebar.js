import React from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks'


const BigSidebar = () => {
  return (
    <Wrapper>
      <div className='sidebar'>
        <header>
          Jobs Organizer
        </header>
        <div>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`

  background-color: var(--white);
  width: 250px;
  height: 100vh;
  box-shadow: var(--shadow-1);

  .sidebar {
    padding: 3rem 2rem;

    .nav-item {
      margin-bottom: 1rem ;
      display: flex;
      align-items: center;

      svg {
        margin-right: 1rem;
      }
      
      a {
        color: var(--grey-500);
      }

      .active {
        color: var(--grey-900);
      }
    }
  }
`;

export default BigSidebar
