import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './slices/city';
import selectUserReduser from './slices/selectUser';
export const store = configureStore({
    reducer: {
        location: cityReducer,
        itsMyUser: selectUserReduser
    }
})