import axios from '../libs/axios.js';
import { createAsyncThunk } from '@reduxjs/toolkit';
import process from 'process';

const { REACT_APP_BASE_URL } = process.env;

export const getCarModels = createAsyncThunk('model/allCarModels', async ({ carBrandId }) => {
  return await axios
    .get(`${REACT_APP_BASE_URL}/models`, {
      params: { carBrandId }
    })
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not get models'));
});
