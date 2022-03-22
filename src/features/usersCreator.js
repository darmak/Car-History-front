import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from './creatorConstants';

export const getUser = createAsyncThunk('user/getUser', async (id) => {
  return axios.get(`${BASE_URL}/user/${id}`).then((res) => {
    return res.data;
  });
});
