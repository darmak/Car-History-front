import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:5000';

// export const authHost = axios.create({ baseURL: BASE_URL });
export const authHost = createAsyncThunk('user/auth', async () => {});

const authInterceptor = (config) => {
  config.headers.authorization = `JWT ${localStorage.getItem('token')}`;
  return config;
};

authHost.interceptors.request.use(authInterceptor);
