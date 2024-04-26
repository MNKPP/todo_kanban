import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userToken: null,
}

export const memberSlice = createSlice({
    name: "memberSlice",
    initialState,
    reducers: {
      setUserToken: (currentToken, action) => {
          currentToken.userToken = action.payload;
      },
    }
})

export const memberReducer = memberSlice.reducer;

export const { setUserToken } = memberSlice.actions;