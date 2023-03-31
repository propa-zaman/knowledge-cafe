import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>Knowledge Cafe</h2>
            <div className='header-anchor'>
            <a href="/home">Home</a>
            <a href="/blog">Blog</a>
            <a href="/Other">Other</a>
            </div>
            
            <img src="https://www.kindpng.com/picc/m/404-4042717_face-profile-png-circle-profile-picture-hd-png.png" alt="" />
            
            
        </div>
    );
};

export default Header;