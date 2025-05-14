// components/Teams/Teams.js
import React from 'react';
import './Teams.css';

function Teams() {
  const teams = [
    { id: 1, name: 'Lakers', sport: 'Basketball' },
    { id: 2, name: 'Real Madrid', sport: 'Football' },
    { id: 3, name: 'Yankees', sport: 'Baseball' },
    { id: 4, name: 'Warriors', sport: 'Basketball' },
    { id: 5, name: 'Barcelona', sport: 'Football' },
    { id: 6, name: 'Red Sox', sport: 'Baseball' },
  ];

  return (
    <section className="teams-section" id="teams">
      <h2>Popular Teams</h2>
      <div className="teams-container">
        {teams.map((team, index) => (
          <div 
            key={team.id} 
            className="team-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="team-logo"></div>
            <h3>{team.name}</h3>
            <p>{team.sport}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Teams;