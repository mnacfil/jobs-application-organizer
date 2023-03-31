import React from 'react';
import NavLinks from './NavLinks';
import AppLogo from './AppLogo';
import styled from 'styled-components';
import {IoIosClose} from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { closeSidebar } from '../features/user/userSlice'

const SmallSidebar = () => {
    const { isSidebarShow } = useSelector(store => store.user);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <div className={`${isSidebarShow ? 'show-sidebar': ''} sidebar`}>
                <div>
                    <AppLogo />
                    <button onClick={() => dispatch(closeSidebar())}>
                        <IoIosClose />
                    </button>
                </div>
                <NavLinks />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.aside`
    @media screen and (min-width: 992px) {
        display: none
    }

    .sidebar {
        width: 250px;
        min-height: 100vh;
        background: var(--white);
        position: fixed;
        left: 0;
        top: 0;
        transform: translate(-100%);
        transition: var(--transition);
    
        .show-sidebar {
            transform: translate(0);
        }
    
        div {
            position: relative;
            button {
                background: : none;
                border: none;
            }
            svg {
                position: absolute;
                top: 1rem;
                right: 1rem;
                color: var(--red-dark);
                font-size: 2rem;
                cursor: pointer;
            }
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
            color: var(--primary-400);
          }
        }
    }
`;

export default SmallSidebar