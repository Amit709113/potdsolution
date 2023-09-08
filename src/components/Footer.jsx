import React from 'react'
import './Footer.css'
import {FaGreaterThan} from 'react-icons/fa'
import Foot,{Facilities,OtherActivities,JoinUs} from './Foot';
import FooterLower from "./FooterLower.jsx";
const Footer = () => {
  return (
    <>
    <div id="section-footer-info">
        <div className="footer-container">
            <div className='footer-row'>
                <Foot />
                <Facilities />
                <OtherActivities />
                <JoinUs />
            </div>
        </div>
    </div>
    <FooterLower />
    </>
  )
}

export default Footer
