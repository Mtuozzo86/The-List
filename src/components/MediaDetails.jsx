import { useEffect, useState } from 'react';
import Card from './Card';
import './Card.css';
import './MediaDetails.css';

function MediaDetails({ movie, handleBack, selectedMedia }) {
  console.log(movie);
  function handleGoBack() {
    handleBack(null);
  }
  return (
    <div className="movie-details-container">
      <div className="columns">
        <Card poster={movie.poster_path} selectedMedia={selectedMedia} />

        <button onClick={handleGoBack}>Home</button>
      </div>
      <div className="columns">
        <h3>{movie.title}</h3>
        <p className="release-date">Release date: {movie.release_date}</p>
        <p className="overview">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MediaDetails;
