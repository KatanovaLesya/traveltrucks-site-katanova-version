import { useState } from "react";
import styles from "./Filters.module.css";
import PropTypes from "prop-types";

const VehicleTypeFilter = ({ onChange }) => {
  const [selectedType, setSelectedType] = useState("");

  // Карта для відповідностей типів з UI до API
  const vehicleTypeMap = {
    Van: "panelTruck",
    "Fully Integrated": "fullyIntegrated",
    Alcove: "alcove",
  };

  // Типи транспортних засобів для відображення в UI
  const vehicleTypes = ["Van", "Fully Integrated", "Alcove"];

  // Обробник кліку на кнопки
  const handleButtonClick = (type) => {
    const apiType = vehicleTypeMap[type]; // Конвертація з UI до API
   
    setSelectedType(type); // Відображення активного вибору в UI
    onChange(apiType); // Передача значення з API у фільтри
  };

  return (
    <div className={styles.filterBlock}>
      <label className={styles.label}>Vehicle Type</label>
      <div className={styles.radioGroup}>
        {vehicleTypes.map((type) => (
          <button
            key={type}
            onClick={() => handleButtonClick(type)}
            className={
              selectedType === type ? styles.radioActive : styles.radioButton
            }
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

// Перевірка типів пропсів
VehicleTypeFilter.propTypes = {
  onChange: PropTypes.func.isRequired, // onChange має бути функцією та обов'язковим
};

export default VehicleTypeFilter;
