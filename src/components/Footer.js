import React from 'react';
import './Footer.css';
import logo from '../assets/logo1.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Refer & Earn</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Gallery</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Address</h3>
          <ul>
            <li>PNR Road</li>
            <li>Rasipuram</li>
            <li>Namakkal</li>
            <li>India - 637412</li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Courses</h3>
          <ul>
            <li><a href="#">Java Programming</a></li>
            <li><a href="#">Python Programming</a></li>
            <li><a href="#">Flutter App Development</a></li>
            <li><a href="#">Full Stack Development</a></li>
            <li><a href="#">UI UX Design</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Products</h3>
          <ul>
            <li><a href="#">Placement Training</a></li>
            <li><a href="#">GoCode Platform</a></li>
            <li><a href="#">Internship Programs</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Business Hours</h3>
          <ul>
            <li>Monday - Friday : 9:00 - 18:00</li>
            <li>Saturday : 9:00 - 16:00</li>
            <li>Sunday : Closed</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <img src={logo} alt="GeekBase Logo" className="footer-logo-img" />
        </div>
        <p className="footer-description">
          GeekBase, founded in 2023 with the mission of making IT education accessible to everyone, embarked on its journey 
          fueled by a passion for programming and a vision to offer world-class quality online learning, upskilling, freelancing, 
          campus training, and placement opportunities.
        </p>
      </div>
      
      <hr className="footer-divider" />
      
      <div className="footer-copyright">
        <p>&copy; 2024 GeekBase Technology. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
