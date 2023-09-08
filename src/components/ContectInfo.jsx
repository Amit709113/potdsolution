import React from 'react';
import {FaPhoneFlip} from "react-icons/fa6";
import {FiMail} from "react-icons/fi";

import './ContectInfo.css';

const ContectInfo = () => {
  return (

    <div className='section_contct_info'>
        <div className="contect-container">

            <div className="cn-row-main">
                <div className="contect-row">
                    <div className='cn-detail-title'>For More Details</div>
                </div>
                <div className='cn-row'>
                    <div className="cn-logo"> <FaPhoneFlip /></div>
                    <div className="cn-info">
                        <div className="cn-no">0123456789 </div>
                        <div className='contect-comments'>Contect for Enquiry</div>
                    </div>
                </div>
                <div className='cn-row'>
                    <div className="cn-logo" > <FiMail style={{fontSize:'3.7rem'}}/>{/* email-logo */}</div>
                    <div className="cn-info">
                        <div className="cn-no"> dps@gmail.com </div >
                        <div className='contect-comments' > Mail us</div>
                    </div>
                </div>

                

            </div>
        </div>
      
    </div>
  )
}

export default ContectInfo;
