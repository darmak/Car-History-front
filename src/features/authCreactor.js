import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:5000';

export const registration = createAsyncThunk('user/registration', async (userData) => {
  return axios.post(`${BASE_URL}/registration`, userData).then((res) => {
    return res.data;
  });
});

export const login = createAsyncThunk('user/login', async ({ email, password }) => {
  return axios.post(`${BASE_URL}/login`, { email, password }).then((res) => {
    return res.data;
  });
});
