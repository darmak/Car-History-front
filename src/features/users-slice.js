import { createSlice } from '@reduxjs/toolkit';
import { getUser, getAllUsers } from './usersCreator';

const initialState = {
  user: {},
  users: []
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [getUser.fulfilled.type]: (state, action) => {
      state.user = action.payload;
    },
    [getAllUsers.fulfilled.type]: (state, action) => {
      state.users = action.payload;
    }
  }
});

export default usersSlice.reducer;
