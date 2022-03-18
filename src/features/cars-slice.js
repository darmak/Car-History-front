import { createSlice } from '@reduxjs/toolkit';
import { searchCars, userCars } from './carsCreator';

const initialState = {
  cars: [],
  carsSearch: [],
  selectCar: {}
};

const carsSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setSelectCar(state, action) {
      state.selectCar = action.payload;
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

export const { setSelectCar } = carsSlice.actions;
export default carsSlice.reducer;
