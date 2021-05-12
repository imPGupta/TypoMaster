import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='nav-left'>
                <img className='nav-logo' src={logo} alt='nav-logo' />
            </div>
            <div className='nav-right'>
                <a href='https//:www.codeworld.ml' className='nav-link' target="_blank" >
                    CodeWorld
                </a>
            </div>
        </div>
    );
};

export default Navbar;
