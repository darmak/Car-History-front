import axios from '../libs/axios.js';
import { createAsyncThunk } from '@reduxjs/toolkit';
import process from 'process';

const { REACT_APP_BASE_URL } = process.env;

export const getUser = createAsyncThunk('user/getUser', async (id) => {
  return axios.get(`${REACT_APP_BASE_URL}/user/${id}`).then((res) => {
    return res.data;
  });
});
