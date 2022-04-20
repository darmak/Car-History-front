import { createSlice } from '@reduxjs/toolkit';
import { searchCars, getUserCars } from './carsCreator';

const initialState = {
  cars: [],
  carsSearch: [],
  selectedCar: {}
};

const carsSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setSelectedCar(state, action) {
      state.selectedCar = action.payload;
    },
    cleaningSearchCars(state) {
      state.carsSearch = [];
    }
  },
  extraReducers: {
    [searchCars.fulfilled.type]: (state, action) => {
      state.carsSearch = action.payload;
    },
    [getUserCars.fulfilled.type]: (state, action) => {
      state.cars = action.payload;
    }
  }
});

export const { setSelectedCar, cleaningSearchCars } = carsSlice.actions;
export default carsSlice.reducer;
