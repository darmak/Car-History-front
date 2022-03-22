import { createSlice } from '@reduxjs/toolkit';
import { getAllBrands } from './brandsCreator';

const initialState = {
  brands: []
};

const brandsSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllBrands.fulfilled.type]: (state, action) => {
      state.brands = action.payload;
    }
  }
});

export default brandsSlice.reducer;
