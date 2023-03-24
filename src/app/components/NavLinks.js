import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import {IoIosStats} from 'react-icons/io'
import {ImProfile} from 'react-icons/im'
import {FcViewDetails, FcPositiveDynamic, FcPortraitMode, FcList} from 'react-icons/fc'

const NavLinks = () => {
  return (
    <ul className='nav-links'>
        <li className='nav-item'>
            <FcPositiveDynamic />
            <NavLink 
                className={({ isActive}) => isActive ? 'active' : ''} 
                to='/stats'
                >
                    Stats
            </NavLink>
        </li>   
        <li className='nav-item'>
            <FcList />
            <NavLink
                to='/all-job'
                className={({ isActive }) => isActive ? 'active' : ''} 
             >
                All Job
            </NavLink>
        </li>
        <li className='nav-item'>
            <FcViewDetails />
            <NavLink 
                to='/add-job'
                className={({ isActive }) =>  isActive ? 'active' : ''} 
                >
                Add Job
            </NavLink>
        </li>
        <li className='nav-item'>
            <FcPortraitMode />
            <NavLink 
                to='/profile'
                className={({ isActive }) =>  isActive ? 'active' : ''} 
                >
                    Profile
            </NavLink>
        </li>
    </ul>
  )
}

export default NavLinks