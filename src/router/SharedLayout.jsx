import React from 'react'
import { Outlet } from 'react-router-dom'

//main components 
import MostImpInfo from '../components/MostImpInfo'
import SchoolHeading from '../components/SchoolHeading'
import NewNavbar from '../components/NewNavbar'
import Footer from '../components/Footer'



const SharedLayout = () => {
  return (

    <>
      {/* <MostImpInfo />
      <SchoolHeading />
      <NewNavbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default SharedLayout
