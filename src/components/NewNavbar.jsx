import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import './NewNavbar.css'
import SubNavbar from './SubNavbar';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const NewNavbar = () => {

    const[showNavbarForMobile,setShowNavbarForMobile]=useState(false);
    const location= useLocation();
    useEffect(()=>{
        setShowNavbarForMobile(false);
    },[location])

  return (
    <>
        <div id="section-menu-header" className=' sticky section-menu-header-class'>
            <div className="containern">
                    <nav className="navbar navbar-expand-lg p-0">
                        {/* menu for mobile */}
                        <button className={showNavbarForMobile===true?"navbar-toggler collapsed":"navbar-toggler"} type='button' onClick={()=>{
                            setShowNavbarForMobile(!showNavbarForMobile);
                        }} >
                            <span className="navbar-toggle-icon">
                                <IoMenu />
                            </span>
                        </button>

                        <div className={showNavbarForMobile?"navbar-collapse collapse show ":"navbar-collapse collapse"} id="navbar-supported-content">
                            
                        <SubNavbar />
                        </div>
                    </nav>
            </div>    
        </div> 

    </>
  )
}

export default NewNavbar 
