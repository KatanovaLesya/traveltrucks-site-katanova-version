import PropTypes from "prop-types";
import CamperFeatures from "./CamperFeatures";
import VehicleDetails from "./VehicleDetails";
import styles from "./CamperDetails.module.css";

const FeaturesContent = ({ features, details }) => (
  <div className={styles.featuresContentContainer}>
  <div className={styles.featuresAndDetails}>
    <CamperFeatures features={features} />
      <h2 className={styles.heading}>Vehicle details</h2>
      <div className={styles.tabContainerVehicle}></div>
      <VehicleDetails details={details} />
      
  </div>
  </div>
  
);

FeaturesContent.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  details: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default FeaturesContent;
