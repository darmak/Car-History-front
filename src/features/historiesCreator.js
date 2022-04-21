import axios from '../libs/axios.js';
import { createAsyncThunk } from '@reduxjs/toolkit';
import process from 'process';

const { REACT_APP_BASE_URL } = process.env;

export const getCarHistories = createAsyncThunk('history/carHistories', async ({ carId }) => {
  return await axios
    .get(`${REACT_APP_BASE_URL}/histories/${carId}`)
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not get hiistories'));
});

export const addNewHistory = createAsyncThunk('history/addNewHistory', async (newHistory) => {
  return await axios
    .post(`${REACT_APP_BASE_URL}/histories`, newHistory, {})
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not add new history'));
});
