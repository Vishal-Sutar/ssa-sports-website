import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import FeaturedGames from './components/FeaturedGames/FeaturedGames';
import NewsSection from './components/NewsSection/NewsSection';
import Teams from './components/Teams/Teams';
import Countdown from './components/Countdown/Countdown';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedGames />
      <NewsSection />
      <Teams />
      <Countdown />
      <Footer />
    </div>
  );
}

export default App;