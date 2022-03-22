import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from './creatorConstants';

export const getCarHistories = createAsyncThunk('history/carHistories', async ({ carId }) => {
  return await axios
    .get(`${BASE_URL}/histories`, { params: { carId } })
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not get hiistories'));
});
