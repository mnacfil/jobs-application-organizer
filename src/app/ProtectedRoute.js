import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { getUserFromLS } from './util/localStorage'

const ProtectedRoute = ({ children }) => {
    const user = getUserFromLS()
    console.log(user);
    const { currentUser } = useSelector(store => store.user);
    if(!currentUser && !user) return <Navigate to='/landing'/>
    return children;
}

export default ProtectedRoute