import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:5000';

export const carHistories = createAsyncThunk('history/carHistories', async ({ carId }) => {
  const response = await axios
    .get(`${BASE_URL}/histories`, { params: { carId } })
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not get hiistories'));
  return response;
});
