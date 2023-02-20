import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    mode: 'Dark Mode'
}
export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        CHANGE_MODE: (state, action) => { state.mode = action.payload }
    }
})
export const { CHANGE_MODE } = modeSlice.actions;
export default modeSlice.reducer;