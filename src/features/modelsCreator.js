import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import process from 'process';

const { REACT_APP_BASE_URL } = process.env;

export const getCarModels = createAsyncThunk('model/allCarModels', async ({ carBrandId }) => {
  return await axios
    .get(`${REACT_APP_BASE_URL}/models`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `JWT ${localStorage.getItem('token')}`
      },
      params: { carBrandId }
    })
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not get models'));
});
