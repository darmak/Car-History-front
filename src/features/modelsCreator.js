import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from './creatorConstants';

export const getCarModels = createAsyncThunk('model/allCarModels', async ({ carBrandId }) => {
  return await axios
    .get(`${BASE_URL}/models`, { params: { carBrandId } })
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not get models'));
});
