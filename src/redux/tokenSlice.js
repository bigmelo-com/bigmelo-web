import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    access_token: "",
    logged: false,
};

export const tokenSlice = createSlice({
    name: "tokenSlice",
    initialState,
    reducers: {
        changeToken: (state, action) => {

            const {access_token, logged} = action.payload;

            state.access_token = access_token;
            state.logged = logged;

        }
    }
});

export const { changeToken } = tokenSlice.actions;
export const selectToken = (state) => state.tokenState.access_token;
export const selectLogged = (state) => state.tokenState.logged;
export default tokenSlice.reducer;