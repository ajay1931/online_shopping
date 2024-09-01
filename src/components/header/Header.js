import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header_left'>
                <h1>Online Shopping</h1>
            </div>
            <div className='header_center'>
                <input placeholder='search for products'/>
                <button>Search</button>
                <button>Cart<span className='cart_count'></span></button>
            </div>
            <div className='header_right'>
                <h3>My Account</h3>
                <button>Register/Login In</button>
            </div>

        </div>
    )
}

export default Header
