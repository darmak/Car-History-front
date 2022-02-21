import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:5000';

export const fetchUsers = createAsyncThunk('user/fetchAllUsers', async () => {
  const response = await axios
    .get(`${BASE_URL}/user`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `JWT ${localStorage.getItem('token')}`
      }
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch(() => console.log('ошибка фронта'));
  return response;
});
