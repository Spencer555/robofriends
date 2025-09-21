import { configureStore } from '@reduxjs/toolkit';
import robotReducer from './robotSlice';

export const store = configureStore({
    reducer: {
        robots: robotReducer,
    },
});
