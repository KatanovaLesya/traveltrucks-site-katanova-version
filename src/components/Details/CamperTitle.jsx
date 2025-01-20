import PropTypes from 'prop-types';
import styles from './CamperDetails.module.css';

const CamperTitle = ({ name, rating, reviews, location, price }) => (
    <div className={styles.titleContainer}>
        <div className={styles.mainInfo}>
            <h1 className={styles.name}>{name}</h1>
            <div className={styles.ratingLocation}>
                <div className={styles.rating}>
                    ⭐ {rating} <span className={styles.reviews}>({reviews?.length || 0} Reviews)</span>
                </div>
                <div className={styles.location}>
                    <svg className={styles.mapIcon}>
                    <use xlinkHref="/assets/svg/sprites.svg#Map"></use>
                    </svg>
                    {location}
                </div>
            </div>
        </div>

            <div className={styles.price}>€{price?.toLocaleString()}</div>
    </div>
);

CamperTitle.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CamperTitle;