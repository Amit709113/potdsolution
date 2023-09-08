import React from 'react'

import OurStrMain from '../vlogFiles/OurStrMain'

import obj from '../data/AcademicsData.json' //problem with data
import GoToTop from './GoToTop'

const SchoolStrength = () => {
  return (
    <>
      <OurStrMain data={obj.schoolstr} />  
      <GoToTop />
    </>
  )
}

export default SchoolStrength
