import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navbar, BigSidebar, SmallSidebar} from '../components'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Layout = () => {
    const {isSmallSidebarShow, isBigSidebarShow} = useSelector(store => store.user);
    return (
        <div>
            <Navbar />
            <SmallSidebar />
            <BigSidebar />
            <DashboardWrapper className="dashboard">
                <Outlet />
                <div 
                    className={`${isSmallSidebarShow ? 'darken-the-body' : ''} dark-body`}>
                </div>
            </DashboardWrapper>
        </div>
    )
}

const DashboardWrapper = styled.main`

    @media screen and (min-width: 992px){
        margin-left: 250px;
    }

    .dark-body {
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0, 0.8);
        z-index: 5;
        display: none;
    }
    .darken-the-body {
        display: block;
    }
`;

export default Layout
