import { createSlice } from '@reduxjs/toolkit';
import { configs } from './../../configs/configs';
const initialState = { city: configs.DEFAULT_CITY }
export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        SET_CITY: (state, action) => { state.city = action.payload }
    }
})

export const { SET_CITY } = citySlice.actions;
export default citySlice.reducer;