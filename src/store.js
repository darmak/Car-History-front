import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './features/cars-slice.js';
import historiesReducer from './features/histories-slice.js';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    histories: historiesReducer
  }
});
