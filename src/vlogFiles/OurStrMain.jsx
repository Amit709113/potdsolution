import React from 'react'

import ContentPageHeading from './ContentPageHeading'
import NbStartColumn from './NbStartColumn'
//import OurStrMainContent from './OurStrMainContent'
import MainContentForAllPages from './MainContentForAllPages'

import './MainContent.css'

const OurStrMain = ({data}) => {

  const {bgimgsrc,heading,...remData} =data;
  const newData={bgimgsrc,heading};
   
    
  return (
    <>
      <ContentPageHeading obj={newData} />

        <div id="section-content-inner">
            <div className="containera">
                <div className="rowa  pmni">
                    <NbStartColumn />
                    <MainContentForAllPages  reqData={remData} />
                </div>
            </div>
        </div>
    </>
  )
}

export default OurStrMain