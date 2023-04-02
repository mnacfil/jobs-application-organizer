import React from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks'
import AppLogo from './AppLogo'
import { useSelector } from 'react-redux'

const BigSidebar = () => {
  const { isBigSidebarShow } = useSelector(store => store.user);
  return (
    <Wrapper >
      <div className={`${isBigSidebarShow ? 'open-big-sidebar' : ''} sidebar`}>
        <header>
          <AppLogo />
        </header>
        <div>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`

  .sidebar {
    background-color: var(--white);
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    transition: var(--transition);
    transform: translate(-100%);
    header {
      height: 7rem;
    }

    div {
      box-shadow: 1px 0 0 rgba(0,0,0,0.2);
      height: calc(100vh - 6rem);
    }

    .nav-links {
      margin: 0;
    }

    .nav-item {
      display: flex;
      align-items: center;
      padding: 1rem;
      transition: var(--transition);
      &:hover {
        background-color: var(--grey-100);
        color: var(--textColor);
        padding-left: 1.5rem;

      }

      svg {
        margin-right: 1rem;
        font-size: 1.75rem;
      }
      
      a {
        color: var(--grey-500);
      }

      .active {
        color: var(--grey-900);
      }
    }
  }

  @media screen and (min-width: 992px){
    .open-big-sidebar {
      transform: translate(0);
    }
  }

`;

export default BigSidebar
