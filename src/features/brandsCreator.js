import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:5000';

export const allBrands = createAsyncThunk('brand/allBrands', async () => {
  const response = await axios
    .get(`${BASE_URL}/brands`)
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not get brands'));
  return response;
});
