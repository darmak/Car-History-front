import axios from '../libs/axios.js';
import { createAsyncThunk } from '@reduxjs/toolkit';
import process from 'process';

const { REACT_APP_BASE_URL } = process.env;

export const searchCars = createAsyncThunk('car/searchCars', async ({ vin, limit }) => {
  return await axios
    .get(`${REACT_APP_BASE_URL}/cars/search`, {
      params: { vin, limit }
    })
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not get car'));
});

export const getUserCars = createAsyncThunk('car/userCars', async ({ userId }) => {
  return await axios
    .get(`${REACT_APP_BASE_URL}/cars/garage`, {
      params: { userId }
    })
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not get user cars'));
});

export const addNewCar = createAsyncThunk('car/addNewCar', async (newCar) => {
  return await axios
    .post(`${REACT_APP_BASE_URL}/cars`, newCar, {})
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not add new car'));
});
