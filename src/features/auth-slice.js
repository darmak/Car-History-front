import jwt_decode from 'jwt-decode';

import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './authCreactor';

const token = localStorage.getItem('token');
const initialState = {
  user: token ? jwt_decode(token) : {},
  isAuthorized: token ? true : false,
  token: token ? token : null
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
    [register.fulfilled.type]: (state, action) => {
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
