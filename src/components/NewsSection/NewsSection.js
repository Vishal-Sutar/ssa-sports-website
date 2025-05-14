// components/NewsSection/NewsSection.js
import React from 'react';
import './NewsSection.css';

function NewsSection() {
  const news = [
    {
      id: 1,
      title: 'NBA Playoffs: Lakers Advance to Conference Finals',
      excerpt: 'The Los Angeles Lakers defeated the Golden State Warriors in Game 7 to advance to the Western Conference Finals.',
      date: 'May 14, 2023',
      category: 'Basketball',
    },
    {
      id: 2,
      title: 'Champions League Final Set: Manchester City vs Inter Milan',
      excerpt: 'Manchester City and Inter Milan will face off in the Champions League final after their semi-final victories.',
      date: 'May 13, 2023',
      category: 'Football',
    },
    {
      id: 3,
      title: 'Olympic Committee Announces New Host City for 2032 Games',
      excerpt: 'The International Olympic Committee has selected Brisbane, Australia as the host city for the 2032 Summer Olympics.',
      date: 'May 12, 2023',
      category: 'Olympics',
    },
  ];

  return (
    <section className="news-section" id="news">
      <h2>Latest Sports News</h2>
      <div className="news-container">
        {news.map((item, index) => (
          <div 
            key={item.id} 
            className="news-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="news-image"></div>
            <div className="news-content">
              <span className="category">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <div className="news-footer">
                <span className="date">{item.date}</span>
                <button className="read-more">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewsSection;