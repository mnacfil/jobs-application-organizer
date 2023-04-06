import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {BiAlignLeft} from 'react-icons/bi';
import {HiUserCircle} from 'react-icons/hi';
import {AiFillCaretDown} from 'react-icons/ai';
import { 
  toggleLogoutBtn, 
  clearAllWhenUserLogout, 
  openSidebar,
  toggleBigSidebar,
  hideBigSidebar 
} from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getUserFromLS } from '../util/localStorage';
import AppLogo from './AppLogo';


const Navbar = () => {
  const dispatch = useDispatch();
  const user = getUserFromLS();
  const { isLogoutBtnShow, isBigSidebarShow } = useSelector(store => store.user);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  
  const handleSidebar = () => {
    if(viewportWidth < 992) {
      dispatch(openSidebar());
    } else {
      dispatch(toggleBigSidebar());
    }
  }

  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [viewportWidth]);

  useEffect(() => {
    if (viewportWidth < 992 && isBigSidebarShow) {
      dispatch(hideBigSidebar());
    }
  }, [viewportWidth])

  return (
    <Wrapper className={isBigSidebarShow ? 'add-left-margin' : ''}>
      <div className="nav-center">
        <div className="nav-toggle" onClick={handleSidebar}>
          <BiAlignLeft />
        </div>
        <h2>{viewportWidth < 992 ? <AppLogo /> : 'Dashboard'}</h2>
        <div className="nav-user">
          <button 
            className='btn'
            onClick={() => dispatch(toggleLogoutBtn())}
            >
            <HiUserCircle />
            <span>{user?.name}</span>
            <AiFillCaretDown />
          </button>
          <button 
            className={`btn logout-btn ${isLogoutBtnShow ? 'show-logout-btn' : ''}`}
            onClick={() => dispatch(clearAllWhenUserLogout())}
            >
            Logout
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  background-color: var(--white);
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--shadow-1);
  transition: var(--transition);

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
        display: flex;
        align-items: center;
        span {
          margin: 0 5px;
        };
      }

      .logout-btn {
        position: absolute;
        top: 40px;
        left: 0;
        display: grid;
        place-items: center;
        background-color: var(--primary-100);
        color: var(--primary-600);
        border: none;
        height: 40px;
        width: 100%;
        display: none;
      }
      .show-logout-btn {
        display: inline-block;
      }
    }
  }

`;

export default Navbar
