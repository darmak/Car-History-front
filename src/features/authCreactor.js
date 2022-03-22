import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import process from 'process';

const { REACT_APP_BASE_URL } = process.env;

export const register = createAsyncThunk('user/registration', async (userData) => {
  return axios.post(`${REACT_APP_BASE_URL}/registration`, userData).then((res) => {
    return res.data;
  });
});

export const login = createAsyncThunk('user/login', async ({ email, password }) => {
  return axios.post(`${REACT_APP_BASE_URL}/login`, { email, password }).then((res) => {
    return res.data;
  });
});
