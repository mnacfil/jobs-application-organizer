import React from 'react'
import { Link } from 'react-router-dom';
import {IoIosStats} from 'react-icons/io'
import {ImProfile} from 'react-icons/im'
import {FcViewDetails, FcPositiveDynamic, FcPortraitMode, FcList} from 'react-icons/fc'

const NavLinks = () => {
  return (
    <ul className='nav-links'>
        <li className='nav-item'>
            <FcPositiveDynamic />
            <span>Stats</span>
        </li>
        <li className='nav-item'>
            <FcList />
            <span>All Job</span>
        </li>
        <li className='nav-item'>
            <FcViewDetails />
            <span>Add Job</span>
        </li>
        <li className='nav-item'>
            <FcPortraitMode />
            <span>Profile</span>
        </li>
    </ul>
  )
}

export default NavLinks