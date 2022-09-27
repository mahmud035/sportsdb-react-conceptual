import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [search, setSearch] = useState('');
  console.log(search);

  return (
    <div className="home-container">
      <div className="players-container">
        <h1>All Players</h1>
        <div className="search-area">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="search-input"
          />
          &nbsp;
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
