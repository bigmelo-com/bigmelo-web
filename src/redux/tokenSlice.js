import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    access_token: "",
};

export const tokenSlice = createSlice({
    name: "authToken",
    initialState,
    reducers: {
        changeToken: (state, action) => {
            state.access_token = action.payload;
        }
    }
});

export const { changeToken } = tokenSlice.actions;
export default tokenSlice.reducer;