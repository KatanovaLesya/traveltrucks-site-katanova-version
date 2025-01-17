import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campersSlice";
import CamperCard from "./CamperCard/CamperCard";

const CamperList = () => {
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

  return (
    <div>
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </div>
  );
};

export default CamperList;
