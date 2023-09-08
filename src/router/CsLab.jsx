import React from 'react'
import GoToTop from './GoToTop'
import FullPageTemplateOne from '../vlogFiles/FullPageTemplateOne'

import obj from '../data/InfrastructureData.json'
const CsLab = () => {
  return (
    <>
      <FullPageTemplateOne data={obj.cclab} />
      <GoToTop />
      
    </>
  )
}

export default CsLab
