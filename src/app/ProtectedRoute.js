import React from 'react'
import { getUserFromLS } from './util/localStorage';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const user = getUserFromLS();
    if(!user) return <Navigate to='/landing'/>
    return children;
}

export default ProtectedRoute