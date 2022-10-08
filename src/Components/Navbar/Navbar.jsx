import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='nav_main'>
        <div className='nav_logo'>
            <h3>Digi Serves</h3>
        </div>
        <div className="nav_items">
            <ul className='nav_list'>
                <li>Home</li>
                <li>Services</li>
                <li>Products</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar