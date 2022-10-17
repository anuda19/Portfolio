import React from 'react'
import './navbar.css'

const Navbar = () => {
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      
      document.getElementById("navbar").style.background = "#00ffff";
    } else {
      document.getElementById("navbar").style.background = "none";
    }
  }

  return (
    <nav id="navbar"
        className="navbar navbar-expand-lg navbar-dark shadow-5-strong navMain fw-bolder position-fixed w-100">
        <div className="container-fluid ">
            <a className="navbar-brand" href="#">Digi Serves</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav container-fluid justify-content-end">
                <li className="nav-item nav_icon">
                        <a className="nav-link active" aria-current="page" href="#">
                            Home</a>
                    </li>
                    <li className="nav-item nav_icon">
                        <a className="nav-link" aria-current="page" href="#">
                            About</a>
                    </li>
                    <li className="nav-item nav_icon">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item nav_icon">
                        <a className="nav-link" href="#signupModal">Login/Register</a>
                    </li>
                    <li className="nav-item nav_icon" id="search_input">
                        <a className="nav-link" href="#">Search</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar