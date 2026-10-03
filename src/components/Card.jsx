import './Card.css';

function Card({ title, poster, id, handleSelected }) {
  function handleClick() {
    handleSelected(id);
  }

  return (
    <div
      onClick={handleClick}
      className="main-card"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster}`,
      }}
    >
      {/* <h3>{title}</h3> */}
    </div>
  );
}

export default Card;
