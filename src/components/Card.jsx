import './Card.css';

function Card({ poster, id, handleSelected, selectedMedia }) {
  function handleClick() {
    handleSelected(id);
  }
  return (
    <div
      onClick={handleClick}
      className={
        !selectedMedia ? 'main-card' : 'main-card main-card_details-hover'
      }
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster}`,
      }}
    ></div>
  );
}

export default Card;
