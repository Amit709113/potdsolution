import React from 'react'
import './EventBox.css'

const EventBox = ({event}) => {
  return (
    <div id="event-section-container">
        <div className='event-box-heading'>Event</div>
        <div className='event-section-main'> 
            
            {
                event.map((item,idx)=>{
                    return (
                        <div className='event-box' key={idx}>
                            <div className='event-title'>{item.eventTitle}</div>
                            <div className='event-content'>{item.eventContent}</div>
                            <a className='anc-btn'href="http://drive.google.com/uc?export=view&id=1j4_lS72wGQbENBdjlb9a1Z_YZF8hZdnZ" target='_blank' >Know More</a>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default EventBox
