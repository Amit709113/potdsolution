import React from 'react'

import NbStartColumn from './NbStartColumn'
import AboutMainContent from './AboutMainContent'

// import './ContentPageHeading.css'
import './MainContent.css'

const AboutMain = ({data}) => {
    
  return (
    <>
        <div id="section-content-inner">
            <div className="containera">
                <div className="rowa  pmni">
                    <NbStartColumn />
                    <AboutMainContent  reqData={data} />
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutMain