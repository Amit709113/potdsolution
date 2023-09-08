import React, { useEffect,useState } from 'react'
import './NoticeBox.css'
import { noticeGet } from '../crud/UserService';

const NoticeBox = (props) => {

  const[notice,setNotice]=useState();

  useEffect(()=>{
    noticeGet().then((resp)=>{
      setNotice(resp);

    }).catch((error)=>{
      console.error(error);
    })
  },[])

  return (
    <>
      <div id="notice-section-container">
        <div  className='notice-content-section'>
         <div className='notice-board-heading'>Notice Board</div>
         <marquee
            
            direction="up" 
            scrollAmount="6" 
            scrollDelay="6"   
         >
        {notice?
          
          notice.map((item,idx)=>{
            return(
              <div className='notice-tab'  key={idx}>
                <div className='notice-date' >
                  {item.noticeDate}
                </div>
                <div className="notice-title">
                  <a href={item.noticeLink} target='_blank' >{item.noticeTitle}</a>
                </div>

                <div className='notice-content'>
                  {item.noticeDesc}
                </div>
                <br />
                <div className='authority'>{item.noticeAuthor}</div>
                <hr />
              </div>
            )
          })
          :<div>loading....</div>
        }
        </marquee>
        </div>
      </div>
    </>
  )
}

export default NoticeBox
