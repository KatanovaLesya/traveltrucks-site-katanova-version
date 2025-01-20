import PropTypes from "prop-types";
import styles from "./CamperDetails.module.css";

const VehicleDetails = ({ details }) => (
  <div className={styles.detailsContainer}>
    <table className={styles.detailsTable}>
      <tbody>
        {Object.entries(details).map(([key, value]) => (
          <tr key={key}>
            <td className={styles.detailLabel}>{key}</td>
            <td className={styles.detailValue}>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

VehicleDetails.propTypes = {
  details: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default VehicleDetails;
