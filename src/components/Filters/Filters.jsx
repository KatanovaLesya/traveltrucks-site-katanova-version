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
    const currentFilters = {
        location,
        equipment: selectedEquipment,
        vehicleType: selectedVehicleType,
    };
    console.log("Filters being applied from Filters.jsx:", currentFilters);
    onFilterApply(currentFilters); // Передати всі фільтри в onFilterApply
    onSearchClick(); // Викликати подію для виконання пошуку
};


  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterBlock}>
        
        <label className={styles.label}>Location</label>
        <div className={styles.inputWrapper}>
          <svg className={styles.map}>
            <use xlinkHref="/public/assets/svg/sprites.svg#Map"></use>
          </svg>
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="City"
            className={styles.input}
            />
          </div>
      </div>

      <div className={styles.filterBlock}>
        <a className={styles.text}>Filters</a>
        <label className={styles.labelEquipment}>Vehicle Equipment</label>

        <div className={styles.dividerLine}></div>

        <div className={styles.checkboxGroup}>
          {equipmentOptions.map((option) => (
            <label key={option} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedEquipment.includes(option)}
                onChange={() => handleEquipmentChange(option)}
              />
            <span>
              <svg className={styles.icon}>
                {console.log("Generated icon path:", `/assets/svg/sprites.svg#${option.toLowerCase()}`)}
                <use xlinkHref={`/assets/svg/sprites.svg#${option.toLowerCase()}`}></use>
              </svg>
              <span>{option}</span>
            </span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.filterBlock}>
        <label className={styles.labelEquipment}>Vehicle Type</label>

        <div className={styles.dividerLine}></div>
        
      
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
              <svg className={styles.icontype}>
                <use xlinkHref={`/assets/svg/sprites.svg#${type.toLowerCase()}`}></use>
              </svg>
              <span>{type}</span>
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
