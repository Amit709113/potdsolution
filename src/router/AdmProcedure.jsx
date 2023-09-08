import React from 'react'
import GoToTop from './GoToTop'
import AdmProcMain from '../vlogFiles/AdmProcMain.jsx'

import obj from '../data/AdmissionContentData.json'

const AdmProcedure = () => {
  return (
    <>
     <AdmProcMain data={obj.admprocedure} /> 
     <GoToTop />
    </>
  )
}

export default AdmProcedure
