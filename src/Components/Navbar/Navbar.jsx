import React from 'react'
import './navbar.css'

const Navbar = () => {
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      
      document.getElementById("navbar").style.background = "#000";
    } else {
      document.getElementById("navbar").style.background = "none";
    }
  }

  return (
    <nav id="navbar"
        className="navbar navbar-expand-lg shadow-5-strong navMain fw-bolder position-fixed w-100">
        <div className="container-fluid ">
            <a className="navbar-brand" href="#home">Digi Serves</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav container-fluid">
                <li className="nav-item nav_icon">
                        <a aria-current="page" href="#home">
                            Home</a>
                    </li>
                    <li className="nav-item nav_icon">
                        <a href="#services">Services</a>
                    </li>
                    <li className="nav-item nav_icon">
                        <a aria-current="page" href="#portfolio">
                            Portfolio</a>
                    </li>
                    <li className="nav-item nav_icon">
                        <a href="#resume">Resume</a>
                    </li>
                    <li className="nav-item nav_icon">
                        <a href="#price">Price</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar