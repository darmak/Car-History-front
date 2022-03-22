import { createSlice } from '@reduxjs/toolkit';
import { getCarModels } from './modelsCreator';

const initialState = {
  models: []
};

const modelsSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {},
  extraReducers: {
    [getCarModels.fulfilled.type]: (state, action) => {
      state.models = action.payload;
    }
  }
});

export default modelsSlice.reducer;
