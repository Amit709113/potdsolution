import React from 'react'

import {FaGreaterThan} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const NbStartColumn = () => {
  return(
    <>
        <div className="nb-start-column">
            <div className='rowa'>
                <div className="column-second padder-mobile">
                    <div className="inner-left">
                        <div className="inner-left-top-nav-header">
                            Notice Board
                        </div>
                        <div className="rowa">
                            <div className="column-notice-body">
                                <div className="inner-left-body">
                                    <ul className="left-nav">
                                        <li>
                                            <NavLink to={'/testvite/notice'}> <FaGreaterThan />New Notice</NavLink>
                                            {/* to should be updated */}
                                        </li>
                                        <li>
                                            <NavLink to={'/testvite'}> <FaGreaterThan />Home </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/testvite/admprocedure'}> <FaGreaterThan />Admission</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/testvite/abuscus'}> <FaGreaterThan />Facilities</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/testvite/contectus'}> <FaGreaterThan />Contect Us</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NbStartColumn
