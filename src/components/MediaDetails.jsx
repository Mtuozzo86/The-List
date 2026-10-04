import { useEffect, useState } from 'react';
import Card from './Card';
import './Card.css';

function MediaDetails({ movie, handleBack }) {
  return (
    <div>
      <Card poster={movie.poster_path} />
      <h3>{movie.title}</h3>
      <button onClick={() => handleBack(null)}>back</button>
    </div>
  );
}

export default MediaDetails;
