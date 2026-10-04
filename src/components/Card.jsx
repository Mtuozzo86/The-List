import './Card.css';

function Card({
  title,
  poster,
  id,
  handleSelected,
  handleFullDetails,
  fullDetails,
}) {
  function handleClick() {
    handleSelected(id);
    handleFullDetails(true);
  }
  console.log('within card component checking full details: ', fullDetails);
  return (
    <div
      onClick={handleClick}
      className={fullDetails ? 'main-card' : ''}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster}`,
      }}
    >
      {/* <h3>{title}</h3> */}
    </div>
  );
}

export default Card;
