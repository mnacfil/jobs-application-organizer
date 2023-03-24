import React from 'react'
import styled from 'styled-components'
import {BiAlignLeft} from 'react-icons/bi'
import {HiUserCircle} from 'react-icons/hi'
import {AiFillCaretDown} from 'react-icons/ai'


const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-toggle">
          <BiAlignLeft />
        </div>
        <h2>Dashboard</h2>
        <div className="nav-user">
          <button>
            <HiUserCircle />
            <span>Melvin</span>
            <AiFillCaretDown />
          </button>
          <button className='logout-btn'>
            Logout
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  background-color: var(--white);
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--shadow-1);
  margin-left: 250px;
  z-index: 2 ;
  .nav-center {
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;

    h2 {
      margin: 0;
    }

    .nav-toggle {

      display: grid;
      place-items: center;

      svg {
        color: var(--primary-500);
        font-size: 2rem;
        cursor: pointer;
      }
    }

    .nav-user {
      position: relative;
      button {
        background-color: var(--primary-500);
        border: none;
        outline: none;
        color: var(--white);
        padding: 6px 12px;
        display: flex;
        align-items: center;
        cursor: pointer;
        border-radius: 5px;
        letter-spacing: var(--letterSpacing);
        span {
          margin: 0 5px;
        };
      }

      .logout-btn {
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
        display: grid;
        place-items: center;
        height: 40px;
        background-color: var(--primary-100);
        color: var(--primary-600);
        display: none;
      }
    }
  }
`;

export default Navbar
