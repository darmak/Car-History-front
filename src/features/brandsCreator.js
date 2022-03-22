import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from './creatorConstants';

export const getAllBrands = createAsyncThunk('brand/allBrands', async () => {
  return await axios
    .get(`${BASE_URL}/brands`)
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not get brands'));
});
