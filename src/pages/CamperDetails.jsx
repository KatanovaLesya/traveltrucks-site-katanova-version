import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCamperDetails } from "../redux/campersSlice";
import CamperGallery from "../components/Details/CamperGallery";
import CamperTitle from "../components/Details/CamperTitle";
import CamperDescription from "../components/Details/CamperDescription";
import TabNavigation from "../components/Details/TabNavigation";
import FeaturesContent from "../components/Details/FeaturesContent";
import Reviews from "../components/Details/Reviews";
import styles from "../styles/styles.module.css";
import FeedbackForm from "../components/Details/FeedbackForm";

const CamperDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCamper, loading, error } = useSelector((state) => state.campers);
  const [activeTab, setActiveTab] = useState("features");
  const handleFormSubmit = (data) => {
    console.log("Form Submitted:", data);
  };


  useEffect(() => {
    dispatch(fetchCamperDetails(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading camper details...</p>;
  if (error) return <p>Error loading camper details: {error}</p>;
  if (!selectedCamper) return <p>Camper not found.</p>;

  const features = [
    selectedCamper.AC && { key: "ac", label: "AC" },
    selectedCamper.automatic && { key: "automatic", label: "Automatic" },
    selectedCamper.kitchen && { key: "kitchen", label: "Kitchen" },
    selectedCamper.bathroom && { key: "bathroom", label: "Bathroom" },
    selectedCamper.tv && { key: "tv", label: "TV" },
    selectedCamper.radio && { key: "radio", label: "Radio" },
    selectedCamper.refrigerator && { key: "refrigerator", label: "Refrigerator" },
    selectedCamper.microwave && { key: "microwave", label: "Microwave" },
    selectedCamper.gas && { key: "gas", label: "Gas" },
    selectedCamper.water && { key: "water", label: "Water" },
  ].filter(Boolean);

  const details = {
    Form: selectedCamper.form,
    Length: selectedCamper.length,
    Width: selectedCamper.width,
    Height: selectedCamper.height,
    Tank: selectedCamper.tank,
    Consumption: selectedCamper.consumption,
  };

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

        {/* Вкладки */}
        <TabNavigation activeTab={activeTab} onChange={setActiveTab} />

        {/* Контент вкладок */}
        <div className={styles.tabContent}>
          {activeTab === "features" && <FeaturesContent features={features} details={details} />}
          {activeTab === "reviews" && <Reviews reviews={selectedCamper.reviews} />}
        </div>
        <div>
          <FeedbackForm onSubmit={handleFormSubmit} />
        </div>

      </div>
    </div>

      
  );
};

export default CamperDetails;