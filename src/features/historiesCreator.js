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
    .catch(() => console.log('Error: did not get histories'));
});

export const addNewHistory = createAsyncThunk('history/addNewHistory', async (newHistory) => {
  return await axios
    .post(`${REACT_APP_BASE_URL}/histories`, newHistory, {})
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not add new history'));
});

export const editHistory = createAsyncThunk(
  'history/editHistory',
  async ({ id, mileage, description, date }) => {
    return axios
      .put(`${REACT_APP_BASE_URL}/histories/${id}`, { mileage, description, date })
      .then((res) => {
        return res.data;
      });
  }
);

export const deleteHistory = createAsyncThunk('history/deleteHistory', async ({ id }) => {
  return axios.delete(`${REACT_APP_BASE_URL}/histories/${id}`).then((res) => {
    return res.data;
  });
});
