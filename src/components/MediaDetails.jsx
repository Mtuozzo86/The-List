import { useEffect, useState } from 'react';
import Card from './Card';

function MediaDetails({ id, handleBack }) {
  const [movie, setMovie] = useState('');
  console.log(movie);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGRhMGRmMjczYWEzYmQ0YzM1OWE4MmQwMWZkMDEyYSIsIm5iZiI6MTc5MDg4NTY5NS4wMjQsInN1YiI6IjZhYmViZjNmNWQ5MzYwYjYzNjNiYjBiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g4K6LAkbh-pGQNM3rK7dnfE7KHQDf9-GVGcMftDLP5I`,
        accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.log('no fetch', error));
  }, []);

  return (
    <>
      <Card poster={movie.poster_path} />
      <h3>{movie.title}</h3>
      <button onClick={() => handleBack('')}>back</button>
    </>
  );
}

export default MediaDetails;
