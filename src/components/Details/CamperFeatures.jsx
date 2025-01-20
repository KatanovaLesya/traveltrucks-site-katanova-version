import PropTypes from "prop-types";
import styles from "./CamperDetails.module.css";

const CamperFeatures = ({ features }) => (
  <div className={styles.featuresContainer}>
    {features.map((feature) => (
      <div key={feature.key} className={styles.feature}>
        <svg className={styles.featureIcon}>
          <use xlinkHref={`/assets/svg/sprites.svg#${feature.key}`} />
        </svg>
        <span className={styles.featureText}>{feature.label}</span>
      </div>
    ))}
  </div>
);

CamperFeatures.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CamperFeatures;
