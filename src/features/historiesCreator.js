import axios from '../libs/axios.js';
import { createAsyncThunk } from '@reduxjs/toolkit';
import process from 'process';

const { REACT_APP_BASE_URL } = process.env;

export const getCarHistories = createAsyncThunk('history/carHistories', async ({ carId }) => {
  return await axios
    .get(`${REACT_APP_BASE_URL}/histories`, { params: { carId } })
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not get hiistories'));
});
