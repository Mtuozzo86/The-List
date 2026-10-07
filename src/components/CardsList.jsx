import Card from './Card';

function CardsList({ movies, handleSelected, handleFullDetails, fullDetails }) {
  const trendingMoviesHome = movies.map((movie) => (
    <Card
      title={movie.title}
      poster={movie.poster_path}
      id={movie.id}
      handleSelected={handleSelected}
      key={movie.id}
    />
  ));
  return <div className="cards-container">{trendingMoviesHome}</div>;
}

export default CardsList;
