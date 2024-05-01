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
        },
        updateGoalInList: (state, action) => {
            state.goalsList = state.goalsList.map(goal => {
                if (goal.id === action.payload.id) {
                    return {
                        ...goal,
                        ...action.payload
                    };
                }
                return goal;
            });
        }
    }
})

export const goalReducer = goalSlice.reducer;

export const { addGoalList, addGoal, updateGoalInList } = goalSlice.actions;