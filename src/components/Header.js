import React from 'react';
import logo from '../images/logo.png';

function Header() {
    return (
        <div className='header'>
            <img src={logo} alt='Logo rick and morty' />
        </div>
    )
}

export default Header;