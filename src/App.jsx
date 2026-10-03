import React, { useEffect, useState } from 'react';

import './App.css';
import Card from './components/Card';
import Home from './pages/Home';
import MediaDetails from './components/MediaDetails';

function App() {
  const [trendingMovies, setTrendingMovies] = useState(['']);
  const [selectedMedia, setSelectedMedia] = useState('');

  const trendingMoviesHome = trendingMovies.map((movie) => (
    <Card
      title={movie.title}
      poster={movie.poster_path}
      id={movie.id}
      handleSelected={setSelectedMedia}
    />
  ));

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGRhMGRmMjczYWEzYmQ0YzM1OWE4MmQwMWZkMDEyYSIsIm5iZiI6MTc5MDg4NTY5NS4wMjQsInN1YiI6IjZhYmViZjNmNWQ5MzYwYjYzNjNiYjBiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g4K6LAkbh-pGQNM3rK7dnfE7KHQDf9-GVGcMftDLP5I`,
        accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setTrendingMovies(data.results))
      .catch((error) => console.log('no fetch', error));
  }, []);

  return (
    <div className="main">
      <Home />
      {selectedMedia !== '' ? (
        <MediaDetails id={selectedMedia} handleBack={setSelectedMedia} />
      ) : (
        <div className="cards-container">{trendingMoviesHome}</div>
      )}
    </div>
  );
}

export default App;
