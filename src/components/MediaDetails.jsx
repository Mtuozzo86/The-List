import { useEffect, useState } from 'react';
import Card from './Card';
import './Card.css';
import './MediaDetails.css';

function MediaDetails({ movie, handleBack, fullDetails, handleFullDetails }) {
  console.log(movie);
  function handleGoBack() {
    handleFullDetails(false);
    handleBack(null);
  }
  return (
    <div className="movie-details-container">
      <div className="columns">
        <Card poster={movie.poster_path} fullDetails={fullDetails} />

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
