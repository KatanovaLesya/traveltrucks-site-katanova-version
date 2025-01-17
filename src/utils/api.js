import axios from "axios";

// Встановлення базової URL для API
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

// Отримання списку кемперів
export const fetchCampers = async () => {
  try {
    const { data } = await axios.get("/campers");
    return data;
  } catch (error) {
    console.error("Error fetching campers:", error);
    throw error;
  }
};

// Отримання деталей конкретного кемпера
export const fetchCamperDetails = async (id) => {
  try {
    const { data } = await axios.get(`/campers/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching camper details:", error);
    throw error;
  }
};
