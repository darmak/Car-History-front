import jwt_decode from 'jwt-decode';

import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './authCreactor';

const token = localStorage.getItem('token');

let initialState = {
  user: null,
  isAuthorized: false,
  token: null
};

if (token) {
  try {
    const decode = jwt_decode(token);
    initialState = {
      user: decode,
      isAuthorized: true,
      token: token
    };
  } catch (err) {
    console.log(err);
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuthorized = false;
      state.token = null;
      localStorage.removeItem('token');
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
    },
    [login.rejected.type]: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
      state.isAuthorized = false;
    }
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
