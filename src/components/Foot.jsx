

import {FaGreaterThan} from 'react-icons/fa'
import {FaLocationDot} from 'react-icons/fa6'
// FaLocationDot
import {BsFillTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md'
import { NavLink } from 'react-router-dom';

const Foot = () => {
  return (
    <>
       <div className="row-element">
                    <div className="columns">
                        <div className="column-heading">Quick Links</div>
                        <div className="link-section">
                            <ul>
                                <li>
                                    <NavLink to={'/testvite/'}><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} /> Home</NavLink>
                                </li>
                                <li>
                                    <a href="https://jac.jharkhand.gov.in/jac/"><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} /> JAC Official Site</a>
                                </li>
                                <li>
                                    <a href="https://www.jacresults.com/"><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} /> JAC Results</a>
                                </li>
                                <li>
                                    <NavLink to={'/testvite/about'}><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} /> About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/testvite/admprocedure'}><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} /> Admission</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
    </>
  )
}

const Facilities = ()=> {
    return (
        <div className="row-element">
            <div className="columns">
                <div className="column-heading">Facilities</div>
                <div className="link-section">
                    <ul>
                        <li> <NavLink to={'/testvite/sports-teakwondo'}><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} />Sports</NavLink> </li>
                        <li> <NavLink to={'/testvite/library'}><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} /> Library</NavLink> </li>
                        <li> <NavLink to={'/testvite/transportation'}><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} /> Transportation</NavLink> </li>
                        <li> <NavLink to={'/testvite/cslab'}><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} /> Computer Labs</NavLink> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


const OtherActivities=()=>{
return (
    <>
       <div className="row-element">
                    <div className="columns">
                        <div className="column-heading">Other Activities</div>
                        <div className="link-section">
                            <ul>
                                <li>
                                    <NavLink to={'/testvite/sports-teakwondo'}><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} />Learning and Assignment Projects</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/testvite/user/dashboard/ '}><FaGreaterThan style={{paddingTop:'4px' , marginTop:'3px' ,marginRight:"6px"}} />School login</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
    </>
  )
}

const JoinUs=() => {
    return (
        <>
           <div className="row-element">
                        <div className="columns">
                            <div className="column-heading">Join Us</div>
                            <div className="link-section">
                                <ul>
                                    <li>
                                    <span  href="#"><FaLocationDot style={{ fontSize:"1.3rem",marginRight:"6px"}} /> Chandlaso Road, Chandlaso, Kuru-835213,Lohardaga,Jharkhand</span>
                                    </li>
                                    <li>
                                        <a href="#"><BsFillTelephoneFill style={{fontSize:"1.3rem",marginTop:"14px"}} /> 0123456789,1234567890</a>
                                    </li>
                                    <li>
                                    <a href="#"><MdEmail style={{fontSize:"1.4rem",margin:"14px 0 0 0"}}  /> dps@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
        </>
      )

}

export default Foot;
export {Facilities,OtherActivities,JoinUs};

