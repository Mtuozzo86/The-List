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
    if (fullDetails === false) {
      handleFullDetails(true);
      handleSelected(id);
    }
  }
  return (
    <div
      onClick={handleClick}
      className={
        !fullDetails ? 'main-card' : 'main-card main-card_details-hover'
      }
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster}`,
      }}
    >
      {/* <h3>{title}</h3> */}
    </div>
  );
}

export default Card;
