import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCamperDetails } from "../redux/campersSlice";
import CamperGallery from "../components/Details/CamperGallery";
import CamperTitle from "../components/Details/CamperTitle";
import CamperDescription from "../components/Details/CamperDescription";

//import CamperInfo from "./CamperInfo";
//import CamperFeatures from "./CamperFeatures";
//import VehicleDetails from "./VehicleDetails";
//import BookingForm from "./BookingForm";
//import Reviews from "./Reviews";
import styles from "../styles/styles.module.css";

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
    <div className={styles.detailsContainer}>
      <div className={styles.detailsPage}>
        {/* Заголовок */}
        <CamperTitle 
          name={selectedCamper.name} 
          rating={selectedCamper.rating} 
          reviews={selectedCamper.reviews} 
          location={selectedCamper.location} 
          price={selectedCamper.price} 
        />
        {/* Галерея */}
        <CamperGallery images={selectedCamper.gallery} />
        {/* Опис кемпера */}
        <CamperDescription description={selectedCamper.description} />
      </div>
    </div>

      
  );
};

export default CamperDetails;