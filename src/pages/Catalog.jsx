import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampers } from "../redux/campersSlice";
import CamperCard from "../components/CamperCard/CamperCard";
import Filters from "../components/Filters/Filters";
import styles from "/src/styles/styles.module.css";

const Catalog = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.campers);
  const [filters, setFilters] = useState({});
  const [filteredCampers, setFilteredCampers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);

  // Завантаження даних при першому рендері
  useEffect(() => {
    if (!items || !items.items || items.items.length === 0) {
      dispatch(fetchCampers());
    }
  }, [dispatch, items]);

  // Ініціалізація відфільтрованих кемперів
  useEffect(() => {
    if (items && items.items) {
      setFilteredCampers(items.items);
    }
  }, [items]);



  const applyFilters = (newFilters) => {
  const vehicleTypeMap = {
    Van: "panelTruck",
    "Fully Integrated": "fullyIntegrated",
    Alcove: "alcove",
  };
    
  // Мапа відповідностей для обладнання
  const equipmentMap = {
    AC: "airConditioning",
    Kitchen: "kitchen",
    Bathroom: "bathroom",
    TV: "tv",
    Automatic: "automatic",
  };


  const filtered = items.items.filter((camper) => {
    if (newFilters.location && !camper.location.toLowerCase().includes(newFilters.location.toLowerCase())) {
      return false;
    }


    // Фільтр за обладнанням
    if (newFilters.equipment && newFilters.equipment.length > 0) {
      const hasRequiredEquipment = newFilters.equipment.every((equipment) => {
        const apiKey = equipmentMap[equipment]; // Перетворення назви фільтру на ключ API
        return apiKey && camper[apiKey]; // Перевірка наявності ключа і значення в camper
      });
      if (!hasRequiredEquipment) {
        return false;
      }
    }


    if (newFilters.vehicleType && camper.form !== vehicleTypeMap[newFilters.vehicleType]) {
      return false;
    }
    return true;
  });
  setFilteredCampers(filtered);
};


  const handleSearchClick = () => {
    applyFilters(filters);
    setVisibleCount(6); // Скидання видимих карток
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  if (loading) {
    return <p>Loading campers...</p>;
  }

  if (error) {
    return <p>Error loading campers: {error}</p>;
  }

  return (
    <div className={styles.catalogContainer}>
      <div className={styles.filters}>
        <Filters onFilterApply={setFilters} onSearchClick={handleSearchClick} />
      </div>

      <div className={styles.catalog}>
        
        <div className={styles.grid}>
        {filteredCampers.slice(0, visibleCount).map((camper) => (
          <div key={camper.id} className={styles.cardContainer}>
            <CamperCard camper={camper} />
          </div>
  ))}
</div>
        {visibleCount < filteredCampers.length && (
          <div className={styles.buttonContainer}>
            <button className={styles.loadMoreButton} onClick={handleLoadMore}>
            Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
