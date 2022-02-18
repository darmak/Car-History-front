import { configureStore } from '@reduxjs/toolkit';
import carReducer from './features/car-slice.js';

export const store = configureStore({
    reducer: {
        car: carReducer,
    }
})