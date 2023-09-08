import React from 'react'
import GoToTop from './GoToTop'
import FullPageTemplateOne from '../vlogFiles/FullPageTemplateOne'
import obj from '../data/SportsData.json'
const SportsTeakwondo = () => {
  return (
    <>
      <FullPageTemplateOne data={obj.teakwondo} />
      <GoToTop />
    </>
  )
}

export default SportsTeakwondo
