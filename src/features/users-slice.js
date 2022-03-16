import { createSlice } from '@reduxjs/toolkit';
import { registration } from './usersCreator';

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
    }
  }
});

export const { registrationRoute, authorizationRoute } = usersSlice.actions;
export default usersSlice.reducer;
