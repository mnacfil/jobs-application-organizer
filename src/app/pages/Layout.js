import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navbar, BigSidebar } from '../components'
import styled from 'styled-components';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <BigSidebar />
            <DashboardWrapper className="dashboard">
                <Outlet />
            </DashboardWrapper>
        </div>
    )
}

const DashboardWrapper = styled.main`

    @media screen and (min-width: 992px){
        margin-left: 250px;
    }
`;

export default Layout
