import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:5000';

export const searchCars = createAsyncThunk('car/searchCars', async ({ vin, limit }) => {
  const response = await axios
    .get(`${BASE_URL}/cars/search`, { params: { vin, limit } })
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not get car'));
  return response;
});

export const userCars = createAsyncThunk('car/userCars', async ({ userId }) => {
  const response = await axios
    .get(`${BASE_URL}/cars/garage`, { params: { userId } })
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not get user cars'));
  return response;
});
