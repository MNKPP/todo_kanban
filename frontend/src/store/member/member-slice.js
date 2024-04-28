import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userToken: null,
    isRegister: false,
}

export const memberSlice = createSlice({
    name: "memberSlice",
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.userToken = action.payload;
        },
        clearToken : (state) => {
            state.userToken = null;
        },
        isMemberRegister: (state) => {
            state.isRegister = !state.isRegister;
        }
    }
})

export const memberReducer = memberSlice.reducer;

export const { addToken, clearToken, isMemberRegister } = memberSlice.actions;