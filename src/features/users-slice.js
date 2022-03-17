import { createSlice } from '@reduxjs/toolkit';
import { registration, login } from './usersCreator';

const initialState = {
  user: {},
  authorization: false
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorizationRoute(state) {
      state.authorization = !state.authorization;
    },
    setCandidateEmail(state, action) {
      state.candidate.email = action.payload;
    }
  },
  extraReducers: {
    [registration.fulfilled.type]: (state, action) => {
      state.user = action.payload;
    },
    [login.fulfilled.type]: (state, action) => {
      state.user = action.payload.user;
    }
  }
});

export const { registrationRoute, authorizationRoute } = usersSlice.actions;
export default usersSlice.reducer;
