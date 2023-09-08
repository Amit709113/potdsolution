import React from 'react'
import GoToTop from './GoToTop'
import FullPageTemplateOne from '../vlogFiles/FullPageTemplateOne'
import obj from '../data/InfrastructureData.json'
const Library = () => {
  return (
    <>
     <FullPageTemplateOne data={obj.library} />
     <GoToTop />
    </>
  )
}

export default Library
