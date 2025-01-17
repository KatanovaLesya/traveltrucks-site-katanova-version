import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCamperDetails } from "../redux/campersSlice";

const CamperDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCamper, loading, error } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(fetchCamperDetails(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading camper details...</p>;
  if (error) return <p>Error loading camper details: {error}</p>;

  if (!selectedCamper) return <p>Camper not found.</p>;

  return (
    <div className="camper-details">
      <h2>{selectedCamper.name}</h2>
     <img
        src={selectedCamper?.gallery?.[0]?.thumb || "https://via.placeholder.com/150"}
        alt={selectedCamper?.name || "No name"}
        onError={(e) => {
            e.target.src = "https://via.placeholder.com/150";
  }}
/>

      <p>{selectedCamper.description}</p>
      <p>Price: €{selectedCamper.price}</p>
    </div>
  );
};

export default CamperDetails;
