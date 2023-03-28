import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children }) => {
    const { isLogin } = useSelector(store => store.user)
    if(!isLogin) return <Navigate to='/landing'/>
    return children;
}

export default ProtectedRoute