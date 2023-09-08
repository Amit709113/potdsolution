import React from 'react'
import GoToTop from './GoToTop'
import FullPageTemplateOne from '../vlogFiles/FullPageTemplateOne'

import obj from '../data/FacilitiesData.json'
const Transportation = () => {
  return (
    <>
    
    <FullPageTemplateOne data={obj.transportation} />
    <GoToTop />
      
    </>
  )
}

export default Transportation
