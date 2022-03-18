import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  histories: []
};

const historiesSlice = createSlice({
  name: 'histories',
  initialState,
  reducers: {},
  extraReducers: {}
});

export default historiesSlice.reducer;
