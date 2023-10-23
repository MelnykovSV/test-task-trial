import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteCars: [],
  currentPage: 1,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: initialState,
  reducers: {
    addCarToFavorites(state, action) {
      state.favoriteCars.push(action.payload);
    },
    removeCarFromFavorites(state, action) {
      state.favoriteCars = state.favoriteCars.filter(
        (car) => car.id !== action.payload
      );
    },
    incrementCurrentPage(state) {
      state.currentPage += 1;
    },
    resetCurrentPage(state) {
      state.currentPage = 1;
    },
  },
});

export const favoriteCarsReducer = carsSlice.reducer;
export const {
  addCarToFavorites,
  removeCarFromFavorites,
  incrementCurrentPage,
  resetCurrentPage,
} = carsSlice.actions;

export const selectFavoriteCars = (state) => state.cars.favoriteCars;
export const selectCurrentPage = (state) => state.cars.currentPage;
