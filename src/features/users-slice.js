import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './usersCreator';

const initialState = {
  user: {}
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [getUser.fulfilled.type]: (state, action) => {
      state.user = action.payload;
    }
  }
});

export default usersSlice.reducer;
