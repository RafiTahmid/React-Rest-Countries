import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div>
            <h1>Header from another file</h1>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About US</a>
            </nav>
        </div>
    );
};

export default Header;