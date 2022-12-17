import { configureStore } from '@reduxjs/toolkit';
import modeReduser from './slices/mode';
export const store = configureStore({
    reducer: {
        thisMode: modeReduser
    }
})