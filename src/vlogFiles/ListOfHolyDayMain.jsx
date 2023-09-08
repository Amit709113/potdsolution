import ContentPageHeading from './ContentPageHeading';
import NbStartColumn from "./NbStartColumn";
import MainContentForAllPages from "./MainContentForAllPages";

import './MainContent.css'
import React from 'react'

const ListOfHolyDayMain = ({data}) => {
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

export default ListOfHolyDayMain
