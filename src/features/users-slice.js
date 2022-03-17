import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {}
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {}
});

export default usersSlice.reducer;
