import { createSlice } from '@reduxjs/toolkit';
import { searchCars, userCars } from './carsCreator';

const initialState = {
  cars: [],
  carsSearch: []
};

const carsSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
  extraReducers: {
    [searchCars.fulfilled.type]: (state, action) => {
      state.carsSearch = action.payload;
    },
    [userCars.fulfilled.type]: (state, action) => {
      state.cars = action.payload;
    }
  }
});

export default carsSlice.reducer;
