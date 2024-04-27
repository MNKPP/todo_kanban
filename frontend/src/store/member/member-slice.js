import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userToken: null,
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
        }
    }
})

export const memberReducer = memberSlice.reducer;

export const { addToken } = memberSlice.actions;