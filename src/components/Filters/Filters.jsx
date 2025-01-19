import { useState } from "react";
import styles from "./Filters.module.css";
import PropTypes from "prop-types";

const Filters = ({ onFilterApply, onSearchClick }) => {
  const [location, setLocation] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState("");

  const equipmentOptions = ["AC", "Automatic", "Kitchen", "Bathroom", "TV"];
  const vehicleTypes = ["Van", "Fully Integrated", "Alcove"];

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleEquipmentChange = (option) => {
    setSelectedEquipment((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleVehicleTypeChange = (type) => {
    setSelectedVehicleType(type);
  };

  const handleSearchClick = () => {
    onFilterApply({
      location,
      equipment: selectedEquipment,
      vehicleType: selectedVehicleType,
    });
    onSearchClick();
  };

  return (
    <div className={styles.filtersContainer}>
      <h3 className={styles.filtersTitle}>Filters</h3>

      <div className={styles.filterBlock}>
        <label className={styles.label}>Location</label>
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter location"
          className={styles.input}
        />
      </div>

      <div className={styles.filterBlock}>
        <label className={styles.label}>Vehicle Equipment</label>
        <div className={styles.checkboxGroup}>
          {equipmentOptions.map((option) => (
            <label key={option} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={selectedEquipment.includes(option)}
                onChange={() => handleEquipmentChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.filterBlock}>
        <label className={styles.label}>Vehicle Type</label>
        <div className={styles.radioGroup}>
          {vehicleTypes.map((type) => (
            <button
              key={type}
              onClick={() => handleVehicleTypeChange(type)}
              className={
                selectedVehicleType === type
                  ? styles.radioActive
                  : styles.radioButton
              }
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <button onClick={handleSearchClick} className={styles.searchButton}>
        Search
      </button>
    </div>
  );
};

Filters.propTypes = {
  onFilterApply: PropTypes.func.isRequired,
  onSearchClick: PropTypes.func.isRequired,
};

export default Filters;
