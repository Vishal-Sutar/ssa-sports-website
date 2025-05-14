// components/FeaturedGames/FeaturedGames.js
import React from 'react';
import './FeaturedGames.css';

function FeaturedGames() {
  const games = [
    {
      id: 1,
      team1: 'Lakers',
      team2: 'Warriors',
      league: 'NBA',
      date: 'May 15, 2023',
      time: '7:30 PM',
    },
    {
      id: 2,
      team1: 'Real Madrid',
      team2: 'Barcelona',
      league: 'La Liga',
      date: 'May 16, 2023',
      time: '3:00 PM',
    },
    {
      id: 3,
      team1: 'Yankees',
      team2: 'Red Sox',
      league: 'MLB',
      date: 'May 17, 2023',
      time: '1:00 PM',
    },
  ];

  return (
    <section className="featured-games" id="games">
      <h2>Featured Games</h2>
      <div className="games-container">
        {games.map((game, index) => (
          <div 
            key={game.id} 
            className="game-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="teams">
              <div className="team">
                <div className="logo"></div>
                <h3>{game.team1}</h3>
              </div>
              <div className="vs">VS</div>
              <div className="team">
                <div className="logo"></div>
                <h3>{game.team2}</h3>
              </div>
            </div>
            <div className="game-info">
              <p className="league">{game.league}</p>
              <p className="date">{game.date} | {game.time}</p>
              <button className="watch-button">Watch Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedGames;