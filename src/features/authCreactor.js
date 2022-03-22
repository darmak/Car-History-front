import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from './creatorConstants';

export const register = createAsyncThunk('user/registration', async (userData) => {
  return axios.post(`${BASE_URL}/registration`, userData).then((res) => {
    return res.data;
  });
});

export const login = createAsyncThunk('user/login', async ({ email, password }) => {
  return axios.post(`${BASE_URL}/login`, { email, password }).then((res) => {
    return res.data;
  });
});
