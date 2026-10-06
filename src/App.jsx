import React, { useEffect, useState } from 'react';

import './App.css';
import Home from './pages/Home';
import CardsList from './components/CardsList';
import MediaDetails from './components/MediaDetails';
import { bearerToken } from './services/api';

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [fullDetails, setFullDetails] = useState(false);

  const findSelectedMovie = trendingMovies.find(
    (movie) => movie.id === selectedMedia,
  );

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated', {
      headers: {
        Authorization: bearerToken,
      },
    })
      .then((response) => response.json())
      .then((data) => setTrendingMovies(data.results))
      .catch((error) => console.log('no fetch', error));
  }, []);

  return (
    <div className="main">
      {selectedMedia !== null ? (
        <MediaDetails
          handleBack={setSelectedMedia}
          movie={findSelectedMovie}
          fullDetails={fullDetails}
          handleFullDetails={setFullDetails}
        />
      ) : (
        <>
          <Home />
          <CardsList
            movies={trendingMovies}
            handleSelected={setSelectedMedia}
            handleFullDetails={setFullDetails}
            fullDetails={fullDetails}
          />
        </>
      )}
    </div>
  );
}

export default App;
