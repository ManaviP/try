import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="GeekBase Logo" className="logo-img" /> 
      </div>

      <div className="hamburger" onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${navVisible ? 'active' : ''}`}>
        <li>
          <img 
            src="https://www.geekbase.in/assets/images/HACKATHON1.gif" 
            alt="New Blinking Gif" 
            className="internship-gif"
          />
          <Link to="/">Internship</Link>
        </li>
        <li><Link to="/courses">Courses</Link></li>
        <li 
          className="dropdown" 
          onMouseEnter={toggleDropdown} 
          onMouseLeave={toggleDropdown}
        >
          <Link to="/careers">
            Careers <span className="dropdown-arrow">▼</span>
          </Link>
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li><Link to="/placement-training">Placement Training</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/gocode">GoCode</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
