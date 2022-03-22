import { createSlice } from '@reduxjs/toolkit';
import { getCarHistories } from './historiesCreator';

const initialState = {
  histories: []
};

const historiesSlice = createSlice({
  name: 'histories',
  initialState,
  reducers: {},
  extraReducers: {
    [getCarHistories.fulfilled.type]: (state, action) => {
      state.histories = action.payload;
    }
  }
});

export default historiesSlice.reducer;
