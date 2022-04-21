import { createSlice } from '@reduxjs/toolkit';
import { searchCars, getUserCars, getCar } from './carsCreator';

const initialState = {
  cars: [],
  carsSearch: [],
  selectedCar: {}
};

const carsSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    clearSearchCars(state) {
      state.carsSearch = [];
    }
  },
  extraReducers: {
    [searchCars.fulfilled.type]: (state, action) => {
      state.carsSearch = action.payload;
    },
    [getUserCars.fulfilled.type]: (state, action) => {
      state.cars = action.payload;
    },
    [getCar.fulfilled.type]: (state, action) => {
      state.selectedCar = action.payload;
    }
  }
});

export const { clearSearchCars } = carsSlice.actions;
export default carsSlice.reducer;
