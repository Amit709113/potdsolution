import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const CarouselNav = () => {
  
    const navigator=useNavigate();
    return (
      <>
      <div className='element-dashboard'>
          <ul className='dash-item'>
              <li onClick={()=>{
                  navigator("/testvite/user/dashboard/carousel/create")
              }}>
                  create carousel
              </li>
  
              <li onClick={()=>{
                  navigator("/testvite/user/dashboard/carousel/delete")
              }}>
                  delete / update carousel
              </li>
  
              <li onClick={()=>{
                  navigator("/testvite/user/dashboard/carousel/all")
              }}>
                  All carousel 
              </li>
  
          </ul>
      </div>
      {/* <GetAllNotice /> */}
      <Outlet />
      </>
    )
}

export default CarouselNav
