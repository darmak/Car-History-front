import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:5000';

export const getUser = createAsyncThunk('user/getUser', async (id) => {
  return axios.get(`${BASE_URL}/user/${id}`).then((res) => {
    return res.data;
  });
});
