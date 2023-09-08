import React from 'react'
import {BsPersonCircle} from 'react-icons/bs';
import { IoIosSchool } from "react-icons/io"
import { TbActivityHeartbeat } from "react-icons/tb";
import { BsStack } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Vlog = ({title,des,logoKey,hrefbtn}) => {
  return (
    <>
        <div className="vlog">
            <div className="logo-content">
                <div className="vlog-logo">
                    <BsPersonCircle  className={logoKey==0?"vlog-icon show":"hidden"} />
                    <IoIosSchool  className={logoKey==1?"vlog-icon show":"hidden"} />
                    <BsStack  className={logoKey==2?"vlog-icon show":"hidden"} />
                    <TbActivityHeartbeat  className={logoKey==3?"vlog-icon show":"hidden"} />
                </div>
                <div className="title">
                    <h2>{title}</h2>
                </div>
            </div>
            <div className="vlog-content">
                <p className='description'>
                    {des}    
                </p>
                <NavLink to={hrefbtn}><button className="button">View More</button></NavLink>
            </div>
        </div> 
    </>
  )
}

export default Vlog;
