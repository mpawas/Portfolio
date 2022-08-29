import logo from './Logo.png'
import './Component.css'
import React from "react";
import { MenuBar } from './styledCompnents';
import { Link } from 'react-router-dom';

function Header({ setDisplay, display, menuClass, cls }) {
    const toogleMenu = () => {
        setDisplay(display === '0%' ? '100%' : '0%')
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
                    <a className='contact-content' href='mailto:pawas.mis@gmail.com?subject=Hello'><i className="fa fa-envelope"></i> pawas.mis@gmail.com</a>
                    <a className='contact-content' href='mailto:mishra.pawas@hotmail.com?subject=Hello'><i className="fa fa-envelope"></i> mishra.pawas@hotmail.com</a>
                </div>
                <div className='menu' onClick={toogleMenu}>
                    <i className="fa fa-bars"></i>
                </div>
                <MenuBar display={display}>
                    <div className='menu-contents'>
                        <Link onClick={toogleMenu} to={"/"}>Home</Link>
                    </div>
                    <div className='menu-contents'>
                        <Link onClick={toogleMenu} to={"/about"}>About</Link>
                    </div>
                    <div className='menu-contents'>
                        <Link onClick={toogleMenu} to={"/experience"} >Experience</Link>
                    </div>
                    <div className='menu-contents'>
                        <Link onClick={toogleMenu} to={"/projects"}>Projects</Link>
                    </div>
                    <div className='menu-contents'>
                        <Link onClick={toogleMenu} to={"/contact"}>Contact</Link>
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