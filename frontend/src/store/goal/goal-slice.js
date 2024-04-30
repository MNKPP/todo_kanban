import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    goalsList: []
}

export const goalSlice = createSlice({
    name: "goalSlice",
    initialState,
    reducers: {
        addGoalList: (state, action) => {
            state.goalsList = action.payload;
        },
        addGoal: (state, action) => {
            state.goalsList.push(action.payload);
        }
    }
})

export const goalReducer = goalSlice.reducer;

export const { addGoalList, addGoal } = goalSlice.actions;