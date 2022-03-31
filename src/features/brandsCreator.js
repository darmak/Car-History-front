import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import process from 'process';

const { REACT_APP_BASE_URL } = process.env;

export const getAllBrands = createAsyncThunk('brand/allBrands', async () => {
  return await axios
    .get(`${REACT_APP_BASE_URL}/brands`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `JWT ${localStorage.getItem('token')}`
      }
    })
    .then((res) => {
      return res.data;
    })
    .catch(() => console.log('Error: did not get brands'));
});
