import React from 'react'
import GoToTop from './GoToTop'
import FeeStructureMain from '../vlogFiles/FeeStructureMain'

import obj from '../data/AdmissionContentData.json'

const FeeStructure = () => {
  return (
    <div>
      <FeeStructureMain data={obj['fee-structure']}/>
      <GoToTop />
    </div>
  )
}

export default FeeStructure
