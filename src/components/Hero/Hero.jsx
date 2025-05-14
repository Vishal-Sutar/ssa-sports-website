// components/Hero/Hero.js
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Experience The Thrill Of Sports</h1>
        <p>Get the latest updates, scores, and news from your favorite teams and athletes</p>
        <button className="hero-button">Explore Now</button>
      </div>
      <div className="hero-image"></div>
    </section>
  );
}

export default Hero;