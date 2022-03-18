import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:5000';

export const carHistories = createAsyncThunk('history/carHistories', async ({ vin, limit }) => {
  const response = await axios
    .get(`${BASE_URL}/cars/search`, { params: { vin, limit } })
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not get hiistories'));
  return response;
});
