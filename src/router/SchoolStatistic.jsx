import React from 'react'
import GoToTop from './GoToTop'
import SchoolStatMain from '../vlogFiles/SchoolStatMain'

import obj from '../data/AboutMainData.json'
const SchoolStatistic = () => {
  return (
    <>
        <SchoolStatMain data={obj.schoolstat} />
        <GoToTop />
      
    </>
  )
}

export default SchoolStatistic
