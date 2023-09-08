import React from 'react'
import GoToTop from './GoToTop'
import StaffMain from '../vlogFiles/StaffMain'

import obj from '../data/AboutMainData.json'
const Staff = () => {
  return (
    <>
      <StaffMain data={obj.staff} / >
      <GoToTop />
    </>
  )
}

export default Staff
