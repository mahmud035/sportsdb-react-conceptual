import React from 'react';
import './SinglePlayer.css';

const SinglePlayer = ({ player }) => {
  console.log(player);
  const { strDescriptionEN = 'Not Available', strThumb, strPlayer } = player;
  return (
    <div className="card">
      <img src={strThumb} alt="" />
      <div className="card-body">
        <h3>Name: {strPlayer}</h3>

        <p>
          {strDescriptionEN
            ? strDescriptionEN.slice(0, 60)
            : 'No description available'}
        </p>
        <div className="btn-container">
          <button className="btn-details">Details</button>
          <button className="btn-add-to-cart">Add to Cart</button>
          <button className="btn-bookmark">Bookmark</button>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
