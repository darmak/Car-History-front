import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/users-slice.js';
import carsReducer from './features/cars-slice.js';
import historiesReducer from './features/histories-slice.js';
import authReducer from './features/auth-slice.js';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    users: usersReducer,
    histories: historiesReducer,
    auth: authReducer
  }
});
