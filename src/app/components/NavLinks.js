import React from 'react'
import {FcViewDetails, FcPositiveDynamic, FcPortraitMode, FcList} from 'react-icons/fc'
import AppLink from './AppLink'

const NavLinks = () => {
  return (
    <ul className='nav-links'>
        <li className='nav-item'>
            <FcPositiveDynamic />
            <AppLink name='Stats' to='/'/>
        </li>   
        <li className='nav-item'>
            <FcList />
            <AppLink name='All Job' to='/all-job'/>
        </li>
        <li className='nav-item'>
            <FcViewDetails />
            <AppLink name='Add Job' to='add-job'/>
        </li>
        <li className='nav-item'>
            <FcPortraitMode />
            <AppLink name='Profile' to='/profile'/>
        </li>
    </ul>
  )
}

export default NavLinks