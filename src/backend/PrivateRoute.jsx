import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn } from '../auth';
import "./backend-style.css";
import BackendNav from './BackendNav';

const PrivateRoute = () => {
    
    //  in common
    return (
        <>
        {/* <BackendNav /> */}
        { isLoggedIn()?<Outlet /> : <Navigate to={"/testvite/login"} />}
        </>
    )
}

export default PrivateRoute
