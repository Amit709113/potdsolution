//deplecited

import React, { useState,useEffect } from 'react'
import {doLogout, getCurrentUserDetail, isLoggedIn } from '../auth';
import { Outlet, useNavigate } from 'react-router-dom';
import { BiLogIn,BiLogOut } from "react-icons/bi";

const BackendNav = () => {
    const navigate= useNavigate();
    const [login,setLogin]=useState(false);
    const[user,setUser]=useState(undefined);

    useEffect(()=>{
        setLogin(isLoggedIn())
        setUser(getCurrentUserDetail());
    },[login])

    const logoutHandler=()=>{
        doLogout(()=>{
            //logged out
            setLogin(false);
            navigate("/testvite")

        });
    }

    const loginHandler=()=>{
        navigate('/testvite/login')
    }
    const registerHandler=()=>{
        navigate('/testvite/register')
    }
  return (<>
        <nav id='backend-nav'>
                <ul className='list'>
                    {
                        login && <> 
                        <li>{user.email}</li>
                        <li onClick={logoutHandler}><span className='icon-btn'> <BiLogOut /></span></li>
                       
                        
                        </>
                    }
                    { 
                    !login && <>
                        <li onClick={loginHandler}>login<span className='icon-btn' > <BiLogIn /></span>  </li>
                        <li onClick={registerHandler}>register</li>
                        

                    </>

                    }
                </ul>
        </nav>
        <Outlet />

    </>
  )
}

export default BackendNav
