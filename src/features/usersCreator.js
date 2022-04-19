import axios from '../libs/axios.js';
import { createAsyncThunk } from '@reduxjs/toolkit';
import process from 'process';

const { REACT_APP_BASE_URL } = process.env;

export const getUser = createAsyncThunk('user/getUser', async ({ id }) => {
  return axios.get(`${REACT_APP_BASE_URL}/users/${id}`).then((res) => {
    return res.data;
  });
});

export const getAllUsers = createAsyncThunk('user/getAllUsers', async () => {
  return axios.get(`${REACT_APP_BASE_URL}/users`).then((res) => {
    return res.data;
  });
});

export const editUser = createAsyncThunk('user/editUser', async ({ id, name, email }) => {
  return axios.put(`${REACT_APP_BASE_URL}/users/${id}`, { name, email }).then((res) => {
    return res.data;
  });
});

export const deleteUser = createAsyncThunk('user/deleteUser', async ({ id }) => {
  return axios.delete(`${REACT_APP_BASE_URL}/users/${id}`).then((res) => {
    return res.data;
  });
});
