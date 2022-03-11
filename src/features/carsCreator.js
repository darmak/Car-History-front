import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:5000';

export const carSearch = createAsyncThunk('car/search', async (params) => {
  const response = await axios
    .get(`${BASE_URL}/cars`, { params })
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not get car'));
  return response;
});
