import React from 'react'
import GoToTop from './GoToTop'
import PrincipleMsgMain from '../vlogFiles/PrincipleMsgMain';

import obj from '../data/AboutMainData.json'
const PrincipleMessage = () => {
  return (
    <>
     <PrincipleMsgMain data={obj.principlemsg}/>
     <GoToTop />
    </>
  )
}

export default PrincipleMessage
