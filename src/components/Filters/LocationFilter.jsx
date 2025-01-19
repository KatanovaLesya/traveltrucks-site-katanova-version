import { useState } from "react";
import styles from "./Filters.module.css";
import PropTypes from 'prop-types';


const LocationFilter = ({ onChange }) => {
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    onChange(value);
  };

  return (
    <div className={styles.filterBlock}>
      <label className={styles.label}>Location</label>
      <input
        type="text"
        value={location}
        onChange={handleChange}
        className={styles.input}
        placeholder="Enter location"
      />
    </div>
  );
};
LocationFilter.propTypes = {
  onChange: PropTypes.func.isRequired, // Вказуємо, що onChange обов'язковий і має бути функцією
};

export default LocationFilter;
