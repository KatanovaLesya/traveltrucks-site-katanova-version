import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campersSlice";
import CamperCard from "./CamperCard/CamperCard";
import PropTypes from 'prop-types';


const CamperList = ({ filters }) => {
  const dispatch = useDispatch();

  const campers = useSelector((state) => state.campers.items); // Масив кемперів
  const loading = useSelector((state) => state.campers.loading);
  const error = useSelector((state) => state.campers.error);

  console.log("Campers state before rendering:", campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (loading) return <p>Loading campers...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!campers || campers.length === 0) {
    return <p>No campers available.</p>;
  }

  // Фільтруємо кемпери відповідно до фільтрів
  const filteredCampers = Array.isArray(campers)
    ? campers.filter((camper) => {
        if (filters.location && !camper.location.toLowerCase().includes(filters.location.toLowerCase())) {
          return false;
        }
        if (filters.equipment) {
          const equipmentFilters = filters.equipment;
          const hasAllEquipment = equipmentFilters.every((eq) => camper[eq]);
          if (!hasAllEquipment) {
            return false;
          }
        }
        if (filters.vehicleType && camper.form !== filters.vehicleType) {
          return false;
        }
        return true;
      })
    : [];

  return (
    <div>
      {filteredCampers.length > 0 ? (
        filteredCampers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))
      ) : (
        <p>No campers match the selected filters.</p>
      )}
    </div>
  );
};
CamperList.propTypes = {
  filters: PropTypes.shape({
    location: PropTypes.string,
    equipment: PropTypes.arrayOf(PropTypes.string),
    vehicleType: PropTypes.string,
  }),
};

export default CamperList;
