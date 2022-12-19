import { createSlice } from '@reduxjs/toolkit';
const initialState = { isMyuser: null, trueOrfalse: false };
export const isMyuserSlice = createSlice({
    name: 'selectUser',
    initialState,
    reducers: {
        THIS_USER: (state, action) => { state.isMyuser = action.payload },
        SELECT_STATE: (state, action) => { state.trueOrfalse = action.payload }
    }
})
export const { THIS_USER, SELECT_STATE } = isMyuserSlice.actions;
export default isMyuserSlice.reducer;