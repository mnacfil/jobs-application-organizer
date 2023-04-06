import React from 'react'
import { NavLink } from 'react-router-dom';
import { closeSidebar } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const AppLink = ({ name, to }) => {
    const dispatch = useDispatch();
    const { isSmallSidebarShow } = useSelector(store => store.user);
    const onClick = () => {
      // during desktop view
      if(!isSmallSidebarShow) return;
      dispatch(closeSidebar());
    }
  return (
    <NavLink 
        className={({ isActive}) => isActive ? 'active' : ''} 
        to={to}
        onClick={onClick}
    >
        {name}
    </NavLink>
  )
}

export default AppLink;