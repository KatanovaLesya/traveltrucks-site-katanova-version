import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampers } from "../redux/campersSlice"; // Імпорт екшену
import CamperCard from "../components/CamperCard/CamperCard"; // Імпорт компонента CamperCard
import styles from "/src/styles/styles.module.css"; 

const Catalog = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.campers);

  useEffect(() => {
    // Перевірка, чи список кемперів вже завантажений
    if (!items || items.length === 0) {
      dispatch(fetchCampers());
    }
  }, [dispatch, items]);

  // Логування даних для дебагу
  console.log("Fetched campers:", items);

  if (loading) {
    return <p>Loading campers...</p>; // Повідомлення під час завантаження
  }

  if (error) {
    return <p>Error loading campers: {error}</p>; // Повідомлення про помилку
  }

  // Перевірка і відображення списку кемперів
  const campersArray = Array.isArray(items) ? items : items.items || [];

  return (
    <div className={styles.catalog}>
      <h1>Available Campers</h1>
      <div className={styles.grid}>
        {campersArray.length > 0 ? (
          campersArray.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))
        ) : (
          <p>No campers available.</p>
        )}
      </div>
    </div>
  );
};

export default Catalog;
