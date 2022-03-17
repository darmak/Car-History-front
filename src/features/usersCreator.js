import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:5000';

export const registration = createAsyncThunk('user/registration', async (data) => {
  return axios.post(`${BASE_URL}/registration`, data).then((res) => {
    return res.data;
  });
});

export const login = createAsyncThunk('user/login', async (params) => {
  return axios.post(`${BASE_URL}/login`, params).then((res) => {
    return res.data;
  });
});

export const check = createAsyncThunk('user/check', async () => {
  return axios.get(`${BASE_URL}/auth`).then((res) => {
    return res.data;
  });
});
