import React, { useState } from "react";
import logo from "../assets/logo.png";
import './css/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="navbar">
          {/* Left: Logo */}
          <div className="logo">
            <a href="/" className="logo">
              <img src={logo} alt="Coast Jobs Logo" className="img-logo" />
              <span className="logo-text">Coast <span>Jobs</span></span>
            </a>
          </div>

          {/* Right: Nav and Button */}
          <div className={`nav-actions ${menuOpen ? 'active' : ''}`}>
            <nav id="navigation" role="navigation">
              <ul role="menubar">
                <li role="none"><a href="/#home" role="menuitem">Home</a></li>
                <li role="none"><a href="/#jobs" role="menuitem">Jobs</a></li>
                <li role="none"><a href="/about" role="menuitem">About Us</a></li>
                <li role="none"><a href="/services" role="menuitem">Services</a></li>
              </ul>
            </nav>
            <div className="btn-container">
              <a href="/post-job" className="btn"><span>Post a Job</span></a>
            </div>
          </div>

          {/* Hamburger icon */}
          <div className="menu-icon" onClick={toggleMenu} role="button" aria-label="Toggle menu">
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
