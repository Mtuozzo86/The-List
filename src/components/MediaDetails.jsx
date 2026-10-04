import { useEffect, useState } from 'react';
import Card from './Card';
import './Card.css';

function MediaDetails({ movie, handleBack, fullDetails }) {
  console.log(fullDetails);
  function handleGoBack() {
    handleBack(null);
  }
  return (
    <div>
      <Card poster={movie.poster_path} fullDetails={fullDetails} />
      <h3>{movie.title}</h3>
      <button onClick={handleGoBack}>back</button>
    </div>
  );
}

export default MediaDetails;
