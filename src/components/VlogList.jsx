import React from 'react'
import './Vlog.css'
import Vlog from './Vlog'

const VlogList = ({data}) => {
  return (
    <div className='main-body'>
        <div className='vlog-container'>
            <div className="vlog-wrapper">
                {    
                    data.map((element,idx)=>{
                        return(
                            <Vlog title={element.title} des={element.description} logoKey={element.key} hrefbtn={element.hrefbtn} key={idx}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default VlogList;
