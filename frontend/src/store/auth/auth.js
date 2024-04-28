import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isRegister: false,
}

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
      isMemberRegister: (state, action) => {
          state.isRegister = action.payload;
      },
    }
})

export const authReducer = authSlice.reducer;

export const { isMemberRegister } = authSlice.actions;