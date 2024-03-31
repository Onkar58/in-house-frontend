import { useState } from 'react'
import { Outlet, Navigate, useNavigate, } from 'react-router-dom'
import { useUserAuth } from '../providers/UserContext'

export const ProtectedRoutes = () => {
    const { user } = useUserAuth()
    return (
        user ? <Outlet /> : <Navigate to='/login' />
    )
}

export const UnProtectedRoutes = () => {
    const { user } = useUserAuth()
    return (
        !user ? <Outlet /> : <Navigate to='/' />
    )
}
