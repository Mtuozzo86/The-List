import Card from './Card';

function CardsList({ movies, handleSelected, handleFullDetails }) {
  const trendingMoviesHome = movies.map((movie) => (
    <Card
      title={movie.title}
      poster={movie.poster_path}
      id={movie.id}
      handleSelected={handleSelected}
      handleFullDetails={handleFullDetails}
    />
  ));
  return (
    <>
      <div className="cards-container">{trendingMoviesHome}</div>
    </>
  );
}

export default CardsList;
