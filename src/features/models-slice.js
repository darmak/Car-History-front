import { createSlice } from '@reduxjs/toolkit';
import { allCarModels } from './modelsCreator';

const initialState = {
  models: []
};

const modelsSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {},
  extraReducers: {
    [allCarModels.fulfilled.type]: (state, action) => {
      state.models = action.payload;
    }
  }
});

export default modelsSlice.reducer;
