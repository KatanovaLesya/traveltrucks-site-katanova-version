import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  return (
    <div className={styles.card}>
      <img
        src={camper.gallery?.[0]?.thumb || "https://via.placeholder.com/180"}
        alt={camper.name || "Camper"}
        className={styles.image}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/180";
  }}
/>

      <div className={styles.info}>
        <h3 className={styles.title}>{camper.name}</h3>
        <p className={styles.location}>📍 {camper.location}</p>
        <p className={styles.price}>€{camper.price?.toLocaleString()}</p>
        <Link to={`/catalog/${camper.id}`}>
          <button className={styles.button}>Show More</button>
        </Link>
      </div>
    </div>
  );
};

CamperCard.propTypes = {
  camper: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.number,
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        thumb: PropTypes.string,
        original: PropTypes.string,
      })
    ),
  }),
};

export default CamperCard;
