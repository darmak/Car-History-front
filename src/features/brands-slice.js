import { createSlice } from '@reduxjs/toolkit';
import { allBrands } from './brandsCreator';

const initialState = {
  brands: []
};

const brandsSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {},
  extraReducers: {
    [allBrands.fulfilled.type]: (state, action) => {
      state.brands = action.payload;
    }
  }
});

export default brandsSlice.reducer;
