import React from 'react';
import { FaBars, FaCreditCard, FaHistory, FaHome, FaSignOutAlt, FaUserAstronaut } from 'react-icons/fa';
import Avatar from "../../static/silhouette-face-guy-glasses-male-260nw-1816667771.webp";
import Logo from "../../static/logo.jpg";
import { Link } from "react-router-dom";

import "./side-drawer.css";

const toggleSideDrawer = () => {
    let drawerState = document.getElementById("drawer");
    let menuIconState = document.getElementById("menuIcon");

    if (drawerState.style.display === "flex") {
               drawerState.style.display = "none";
        menuIconState.style.display = "block";
    }
    else {
        drawerState.style.display = "flex";
    }
}

const SideDrawer = () => {
    return(
        <>
        <div className='menu-icon' id='menuIcon' onClick={toggleSideDrawer}>
              <FaBars className='icon' />
        </div>
            <div className='overlay' id='drawer' onClick={toggleSideDrawer}>
                <div className='menu-wrapper'>
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <ul className='menu'>
                        <Link to="home"> <li> <FaHome className="icon"/>  Home</li></Link>
                        <Link to="make-payment"> <li> <FaCreditCard className="icon"/> Make Payment</li></Link>
                        <Link to="history"> <li> <FaHistory className="icon"/>  Payment History</li></Link>
                        <Link to="profile"> <li> <FaUserAstronaut className="icon"/>  Profile</li></Link>
                        <Link to="signin"> <li> <FaSignOutAlt className="icon"/>  Logout</li></Link>
                    </ul>

                    <div className='user-desc'>
                        <img src={Avatar} alt="" />
                        <h3>John Doe</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideDrawer;