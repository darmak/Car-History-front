import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:5000';

export const allCarModels = createAsyncThunk('model/allCarModels', async ({ carBrandId }) => {
  const response = await axios
    .get(`${BASE_URL}/models`, { params: { carBrandId } })
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not get models'));
  return response;
});
