import React from 'react'
import NoticeBox from '../components/NoticeBox'
import EventBox from '../components/EventBox'

import noticeData from '../data/noticeData.json'; 
import eventData from '../data/eventData.json'
const Notice = () => {
  return (
    <>
      <div className='notice-wrapper'>
        <NoticeBox notice={noticeData.noticeBoard}/>
        <EventBox event={eventData.eventData}/>
    </div>
    </>
  )
}

export default Notice
