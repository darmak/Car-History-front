import { createSlice } from '@reduxjs/toolkit';
import { carSearch } from './carsCreator';

const initialState = {
  cars: [],
  carsSearch: []
};

const carsSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
  extraReducers: {
    [carSearch.fulfilled.type]: (state, action) => {
      state.carsSearch = action.payload;
    }
  }
});

export const { registrationRoute, authorizationRoute } = carsSlice.actions;
export default carsSlice.reducer;
