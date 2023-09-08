import React from 'react'
import GoToTop from './GoToTop'
import FullPageTemplateOne from '../vlogFiles/FullPageTemplateOne'

import obj from '../data/FacilitiesData.json'
const Abuscus = () => {
  return (
    <>
      <FullPageTemplateOne data={obj.abuscusclasses} />
      <GoToTop />

    </>
  )
}

export default Abuscus
