import { useEffect, useState } from 'react';
import Card from './Card';

function MediaDetails({ movie, handleBack }) {
  return (
    <>
      <Card poster={movie.poster_path} />
      <h3>{movie.title}</h3>
      <button onClick={() => handleBack('')}>back</button>
    </>
  );
}

export default MediaDetails;
