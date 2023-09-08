import React from 'react'
import BackendNav from './BackendNav'
import './Backend-style.css'
import { Outlet, useNavigate } from 'react-router-dom'
const DashBoard = () => {
  const navigator=useNavigate()
  return (
    <>
      <div id='dashboard'>
      <h1 className='dashboard-heading'>Dashboard </h1>
        <nav>
          <ul className='dash-nav'>
            
            <li className='active' onClick={()=>{
              navigator("/testvite/user/dashboard/notice")
            }}> Notice </li>

            <li onClick={()=>{
              navigator("/testvite/user/dashboard/users")
            }}> user </li>
            
            
            <li onClick={()=>{
              navigator("/testvite/user/dashboard/topper")
            }}> topper </li>

            <li onClick={()=>{
              navigator("/testvite/user/dashboard/carousel")
            }}> carousel </li>

            <li onClick={()=>{
              navigator("/testvite/user/dashboard/category")
            }}> category </li>

            <li onClick={()=>{
              navigator("/testvite/user/dashboard/gallery")
            }}> gallery </li>
            
          </ul>
        </nav>

      </div>
      <Outlet />

    </>
  )
}

export default DashBoard
