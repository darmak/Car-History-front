import { createSlice } from '@reduxjs/toolkit';
import { carHistories } from './historiesCreator';

const initialState = {
  histories: []
};

const historiesSlice = createSlice({
  name: 'histories',
  initialState,
  reducers: {},
  extraReducers: {
    [carHistories.fulfilled.type]: (state, action) => {
      state.histories = action.payload;
    }
  }
});

export default historiesSlice.reducer;
