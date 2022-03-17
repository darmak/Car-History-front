import { createSlice } from '@reduxjs/toolkit';
import { registration, login } from './authCreactor';

const initialState = {
  user: {},
  isAuthorized: false,
  token: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.isAuthorized = false;
      localStorage.setItem('token', null);
    }
  },
  extraReducers: {
    [registration.fulfilled.type]: (state, action) => {
      state.user = action.payload;
    },
    [login.fulfilled.type]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
      state.isAuthorized = true;
    }
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
