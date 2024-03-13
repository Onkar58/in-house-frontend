import React, { useEffect, useState } from 'react'
import { Outlet, Navigate, redirect, useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebaseConfig'
// import { getAuth } from 'firebase/auth'
const ProtectedRoutes = () => {
    const user = auth.currentUser;
    return (
        user ? <Outlet /> : <Navigate to='/login' />
    )
}

export default ProtectedRoutes