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
        <p className={styles.price}>€{camper.price?.toLocaleString()}</p>
        <p className={styles.rating}>
          ⭐ {camper.rating} ({camper.reviews?.length || 0} Reviews)
        </p>
        <div className={styles.location}>
          <svg className={styles.map}>
            <use xlinkHref="/public/assets/svg/sprites.svg#Map"></use>
          </svg>
          {camper.location}
        </div>
        <p className={styles.description}>
          {camper.description?.length > 100
            ? `${camper.description.slice(0, 100)}...`
            : camper.description || "No description available."}
        </p>

        {/* Іконки опцій */}
        <div className={styles.options}>
          
            {camper.AC && (
              <div className={styles.features}>
                <svg className={styles.ac}>
                  <use xlinkHref="/public/assets/svg/sprites.svg#ac"></use>
                </svg>
                <span className={styles.featureText}>AC</span>
              </div>

            )}
            {camper.automatic && (
              <div className={styles.features}>
                <svg className={styles.automatic}>
                  <use xlinkHref="/public/assets/svg/sprites.svg#automatic"></use>
                </svg>
                <span className={styles.featureText}>Automatic</span>
              </div>

            )}
            {camper.kitchen &&  (
              <div className={styles.features}>
                <svg className={styles.kitchen}>
                  <use xlinkHref="/public/assets/svg/sprites.svg#kitchen"></use>
                </svg>
                <span className={styles.featureText}>Kitchen</span>
              </div>

            )}
          {camper.bathroom && (
              <div className={styles.features}>
                <svg className={styles.bathroom}>
                  <use xlinkHref="/public/assets/svg/sprites.svg#bathroom"></use>
                </svg>
                <span className={styles.featureText}>Bathroom</span>
              </div>

            )}
          {camper.tv && (
              <div className={styles.features}>
                <svg className={styles.tv}>
                  <use xlinkHref="/public/assets/svg/sprites.svg#tv"></use>
                </svg>
                <span className={styles.featureText}>TV</span>
              </div>

            )}
          {camper.engine === 'petrol' && (
            <div className={styles.features}>
              <svg className={styles.petrol}>
                <use xlinkHref="/assets/svg/sprites.svg#petrol"></use>
              </svg>
              <span className={styles.featureText}>Petrol</span>
            </div>
          )}  
          {camper.radio && (
              <div className={styles.features}>
                <svg className={styles.radio}>
                  <use xlinkHref="/assets/svg/sprites.svg#radio"></use>
                </svg>
                <span className={styles.featureText}>Radio</span>
              </div>

          )}
          {camper.refrigerator && (
              <div className={styles.features}>
                <svg className={styles.refrigerator}>
                  <use xlinkHref="/assets/svg/sprites.svg#refrigerator"></use>
                </svg>
                <span className={styles.featureText}>Refrigerator</span>
              </div>

          )}
          
          {camper.microwave && (
              <div className={styles.features}>
                <svg className={styles.microwave}>
                  <use xlinkHref="/assets/svg/sprites.svg#microwave"></use>
                </svg>
                <span className={styles.featureText}>Microwave</span>
              </div>

          )}
          {camper.gas && (
              <div className={styles.features}>
                <svg className={styles.gas}>
                  <use xlinkHref="/assets/svg/sprites.svg#gas"></use>
                </svg>
                <span className={styles.featureText}>Gas</span>
              </div>

          )}
          {camper.water && (
              <div className={styles.features}>
                <svg className={styles.water}>
                  <use xlinkHref="/assets/svg/sprites.svg#water"></use>
                </svg>
                <span className={styles.featureText}>Water</span>
              </div>

            )}
            
        </div>
      
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
    rating: PropTypes.number,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string,
      })
    ),
    description: PropTypes.string,
    AC: PropTypes.bool,
    automatic: PropTypes.bool,
    kitchen: PropTypes.bool,
    bathroom: PropTypes.bool,
    tv: PropTypes.bool,
    engine: PropTypes.string,
    radio: PropTypes.bool,
    refrigerator: PropTypes.bool,
    microwave: PropTypes.bool,
    gas: PropTypes.bool,
    water: PropTypes.bool,

  }),
};

export default CamperCard;
