import React from 'react'
import GoToTop from './GoToTop'
import WhyDpsMain from '../vlogFiles/WhyDpsMain'

import obj from '../data/AdmissionContentData.json'

const WhyDps = () => {
  return (
    <>
      <WhyDpsMain data={obj.whydps} />
      <GoToTop />
    </>
  )
}

export default WhyDps
