import { configureStore } from '@reduxjs/toolkit';
import carReducer from './features/car-slice.js';
import historyReducer from './features/history-slice.js';

export const store = configureStore({
  reducer: {
    car: carReducer,
    history: historyReducer
  }
});
