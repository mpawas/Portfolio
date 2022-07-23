import logo from './Logo.png'
import './Component.css'
import React, { useState } from "react";
import { MenuBar } from './compnents';

function Header({setDisplay, display, menuClass, cls}) {
    const toogleMenu = () => {
        setDisplay(display === '0%' ? '100%' : '0%')
        // menuClass(cls === 'fa fa-bars'? "fa-solid fa-xmark":"fa fa-bars")
    }


    return (
        <div>
            <div className='navbar'>
                <div className='header-img'>
                    <img src={logo} alt="" />
                </div>
                <div className='name'>
                    <p>Pawas Mishra</p> 
                </div>
                <div className='contact'>
                    <a className='contact-content' href='tel:+9779869074903'><i className="fa fa-square-phone"></i> +977 - 9869074903</a>
                    <a className='contact-content' href='mailto:pawas.mis@gmail.com'><i className="fa fa-envelope"></i> pawas.mis@gmail.com</a>
                    <a className='contact-content' href='mailto:pawas.mis@gmail.com'><i className="fa fa-envelope"></i> mishra.pawas@hotmail.com</a>
                </div>
                <div className='menu' onClick={toogleMenu}>
                    <i className="fa fa-bars"></i>
                </div>
                <MenuBar display={display}>
                    <div className='menu-contents'>
                        Home
                    </div>
                    <div className='menu-contents'>
                        About
                    </div>
                    <div className='menu-contents'>
                        Experience
                    </div>
                    <div className='menu-contents'>
                        Projects
                    </div>
                    <div className='menu-contents'>
                        Contact
                    </div>
                    <div className='menu-footer'>
                        <i className='fa-regular fa-copyright'></i> Pawas Mishra
                    </div>
                </MenuBar>
            </div>

        </div>
    );
}

export default Header