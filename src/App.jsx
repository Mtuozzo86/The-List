import React, { useEffect, useEffectEvent, useState } from 'react';

import './App.css';
import Card from './components/Card';
import Home from './pages/Home';

function App() {
  const [movies, setMovies] = useState(['']);
  console.log('state result: ', movies);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGRhMGRmMjczYWEzYmQ0YzM1OWE4MmQwMWZkMDEyYSIsIm5iZiI6MTc5MDg4NTY5NS4wMjQsInN1YiI6IjZhYmViZjNmNWQ5MzYwYjYzNjNiYjBiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g4K6LAkbh-pGQNM3rK7dnfE7KHQDf9-GVGcMftDLP5I`,
        accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log('no fetch', error));
  }, []);

  return (
    <div className="main">
      <Home />
      {movies.map((movie) => (
        <Card title={movie.title} poster={movie.poster_path} />
      ))}
    </div>
  );
}

export default App;
