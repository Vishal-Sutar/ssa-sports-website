// components/Header/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">SSA</div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#games">Games</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#teams">Teams</a></li>
          <li><a href="#schedule">Schedule</a></li>
        </ul>
      </nav>
      <button className="cta-button">Sign In</button>
    </header>
  );
}

export default Header;