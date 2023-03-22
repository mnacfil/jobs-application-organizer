import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navbar, BigSidebar } from '../components'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <BigSidebar />
            <div className="dashboard">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
