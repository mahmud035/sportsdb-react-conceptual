import React from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Players.css';

const Players = ({ players }) => {
  return (
    <div className="card-container">
      {players.map((player, index) => (
        <SinglePlayer key={index} player={player}></SinglePlayer>
      ))}
    </div>
  );
};

export default Players;
