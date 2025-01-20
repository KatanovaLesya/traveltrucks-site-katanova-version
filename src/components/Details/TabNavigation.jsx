import PropTypes from "prop-types";
import styles from "./CamperDetails.module.css";

const TabNavigation = ({ activeTab, onChange }) => (
  <div className={styles.tabContainer}>
    <button
      className={`${styles.tabButton} ${activeTab === "features" ? styles.active : ""}`}
      onClick={() => onChange("features")}
    >
      Features
    </button>
    <button
      className={`${styles.tabButton} ${activeTab === "reviews" ? styles.active : ""}`}
      onClick={() => onChange("reviews")}
    >
      Reviews
    </button>
  </div>
);

TabNavigation.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TabNavigation;
