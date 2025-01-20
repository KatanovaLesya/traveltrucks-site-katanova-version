import PropTypes from "prop-types";
import styles from "./CamperDetails.module.css";

const CamperDescription = ({ description }) => (
  <div className={styles.descriptionContainer}>
    <p className={styles.description}>{description || "No description available."}</p>
  </div>
);

CamperDescription.propTypes = {
  description: PropTypes.string,
};

export default CamperDescription;