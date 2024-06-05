import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    access_token: "",
    logged: false,
    isActive: false
};

export const tokenSlice = createSlice({
    name: "tokenSlice",
    initialState,
    reducers: {
        changeToken: (state, action) => {
            const {access_token, logged} = action.payload;

            return {
                ...state,
                access_token : access_token,
                logged : logged,
            };
        }
    }
});

export const { changeToken } = tokenSlice.actions;
export const selectToken = (state) => state.tokenState.access_token;
export const selectLogged = (state) => state.tokenState.logged;
export default tokenSlice.reducer;