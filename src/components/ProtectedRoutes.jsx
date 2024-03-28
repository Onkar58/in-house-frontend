import { useState } from 'react'
import { Outlet, Navigate, } from 'react-router-dom'
import { useUserAuth } from '../providers/UserContext'
const ProtectedRoutes = () => {
    const user = useUserAuth()
    console.log("use ", user);
    return (
        user ? <Outlet /> : <Navigate to='/login' />
    )
}

export default ProtectedRoutes