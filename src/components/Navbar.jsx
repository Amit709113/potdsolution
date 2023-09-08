import React, { useState } from 'react';
import { useLocation} from 'react-router';
import { useEffect } from 'react';
import './navbar_style.css';
import { IoMenu } from "react-icons/io5";

const Navbar = () =>{
    const [showMediaIcon,setShowMediaIcon]=useState(false);

    const location= useLocation();
    useEffect(()=>{
        setShowMediaIcon(false);
    },[location])


    return(
        <>
        <nav className='main-nav'>
            <div className='menu-link'>
                <ul className={showMediaIcon?"menu-link-desktop desktop":"menu-link-desktop mobile"}> {/* menu-link-desktop  */}
                    <li>
                        <a href="#" className='active'>Home</a>
                    </li>

                    <li>
                        <a href="#">News and Event</a>
                    </li>

                    <li>
                        <a href="#">Notice</a>
                    </li>
                    <li>
                        <a href="#">Faclities</a>
                    </li>
                    <li>
                        <a href="#">Infrastructure</a>
                    </li>
                    <li>
                        <a href="#">Gallery</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>

            </div>
            <div id="hamburger-menu" onClick={()=>{
                setShowMediaIcon(!showMediaIcon)
            }}>
                {/* <i className='fas fa-bars'></i> */}
                <IoMenu style={{fontSize:'2.2rem',color:'#333'}} />
            </div>
            

        </nav>

        </>
    )
}
export default Navbar;