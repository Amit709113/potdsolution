import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ElementNav = (props) => {
    const navigator=useNavigate();
  const {element}=props
  return (
    <>
    <div className='element-dashboard'>
          <ul className='dash-item'>
              <li onClick={()=>{
                  navigator(`/testvite/user/dashboard/${element}/create`)
              }}>
                  create {element}
              </li>
  
              <li onClick={()=>{
                  navigator(`/testvite/user/dashboard/${element}/delete`)
              }}>
                  delete / update {element}
              </li>

              <li onClick={()=>{
                  navigator(`/testvite/user/dashboard/${element}/all`)
              }}>
                  all {element}
              </li>
              {
                element==="gallery"?
                <li onClick={()=>{
                    navigator(`/testvite/user/dashboard/${element}/category`)
                }}
                >by category</li>:null
              }

              
  
          </ul>
      </div>
      {/* <GetAll />  get all  by default */}
      <Outlet />
    </>
  )
}

export default ElementNav
