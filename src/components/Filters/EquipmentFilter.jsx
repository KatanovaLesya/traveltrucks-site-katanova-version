import { useState } from "react";
import styles from "./Filters.module.css";
import PropTypes from 'prop-types';


const EquipmentFilter = ({ onChange }) => {
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const equipmentOptions = ["AC", "Automatic", "Kitchen", "Bathroom", "TV"];

  const handleCheckboxChange = (option) => {
    const updatedSelection = selectedEquipment.includes(option)
      ? selectedEquipment.filter((item) => item !== option)
      : [...selectedEquipment, option];

    setSelectedEquipment(updatedSelection);
    onChange(updatedSelection);
  };

  return (
    <div className={styles.filterBlock}>
      <label className={styles.label}>Vehicle Equipment</label>
      <div className={styles.checkboxGroup}>
        {equipmentOptions.map((option) => (
          <label key={option} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={selectedEquipment.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className={styles.checkbox}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};
EquipmentFilter.propTypes = {
  onChange: PropTypes.func.isRequired, // Перевірка, що onChange є функцією і обов'язковий
};
export default EquipmentFilter;
