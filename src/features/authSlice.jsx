import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authInfo',
    initialState: {
        token: ''
    },
    reducers: {
        getToken: (state, action) => {
            state.token = action.payload
        } 
    }
});

export default authSlice.reducer;

export const { getToken } = authSlice.actions;

export const auth1 = (state) => state.auth.token;