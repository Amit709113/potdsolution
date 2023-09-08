import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect,useState } from 'react';
import BackendNav from '../backend/BackendNav';
const MayBeShowNavbar = ({children,setFoot}) => {

const [nav,setNav]=useState(true);
const location=useLocation();

useEffect(()=>{
    // console.log(location.pathname)
    if(location.pathname=="/testvite/login" || location.pathname=="/testvite/register"||location.pathname.substring(0,15)=="/testvite/user/"){
        setNav(false)
        setFoot(false);
    }else {
        setNav(true);
        setFoot(true);
    }
},[location])

  return (
    <>
      {nav? children:<BackendNav /> }
    </>
  )
}

export default MayBeShowNavbar
