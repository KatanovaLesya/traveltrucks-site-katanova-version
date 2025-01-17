import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Встановлення базового URL для API
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

// Асинхронний екшен для завантаження списку кемперів
export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/campers");
      console.log("Fetched campers:", data); // Логування отриманих даних
      return data;
    } catch (error) {
      console.error("Error fetching campers:", error); // Логування помилок
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Асинхронний екшен для завантаження деталей кемпера
export const fetchCamperDetails = createAsyncThunk(
  "campers/fetchDetails",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/campers/${id}`);
      console.log("Fetched camper details:", data); // Логування отриманих даних
      return data;
    } catch (error) {
      console.error("Error fetching camper details:", error); // Логування помилок
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Ініціальний стан
const initialState = {
  items: [], // Список кемперів
  selectedCamper: null, // Вибраний кемпер
  loading: false, // Стан завантаження
  error: null, // Помилка
};

// Створення slice
const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    // Ви можете додати тут синхронні редюсери, якщо потрібно
  },
  extraReducers: (builder) => {
    builder
      // Обробка fetchCampers
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Обробка fetchCamperDetails
      .addCase(fetchCamperDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCamper = action.payload;
      })
      .addCase(fetchCamperDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Експорт редюсера
export default campersSlice.reducer;
