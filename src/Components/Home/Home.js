import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="players-container">
        <h1>All Players</h1>
        <div className="search-area">
          <input type="text" className="search-input" /> &nbsp;
          <button className="search-btn">Search</button>
        </div>
      </div>
      <div className="single-player-container">
        <h1>Cart</h1>
      </div>
    </div>
  );
};

export default Home;
