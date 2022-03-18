import { createSlice } from '@reduxjs/toolkit';
import { searchCars, userCars } from './carsCreator';

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
    }
  },
  extraReducers: {
    [searchCars.fulfilled.type]: (state, action) => {
      state.carsSearch = action.payload;
    },
    [userCars.fulfilled.type]: (state, action) => {
      state.cars = action.payload;
    }
  }
});

export const { setSelectedCar } = carsSlice.actions;
export default carsSlice.reducer;
