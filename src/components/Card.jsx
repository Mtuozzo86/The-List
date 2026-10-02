import './Card.css';

function Card({ title, poster }) {
  return (
    <div
      className="main-card"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster}`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
      }}
    >
      <h3>{title}</h3>
    </div>
  );
}

export default Card;
