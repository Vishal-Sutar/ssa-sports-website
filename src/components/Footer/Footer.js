// components/Footer/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>SportsHub</h3>
          <p>Your ultimate destination for all things sports. Get the latest news, scores, and updates.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#games">Games</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#teams">Teams</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>info@sportshub.com</p>
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="icon"><span>FB</span></a>
            <a href="#" className="icon"><span>TW</span></a>
            <a href="#" className="icon"><span>IG</span></a>
            <a href="#" className="icon"><span>YT</span></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SportsHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;