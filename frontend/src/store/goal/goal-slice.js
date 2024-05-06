import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    goalsList: [],
    goalSelected: null
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
        addTaskInGoalList: (state, action) => {
            let goal = state.goalsList.find(goal => goal.id === action.payload.id);
            if (goal) {
                goal.tasks.push(action.payload.task);
            }
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
        },
        deleteGoalInList: (state, action) => {
            state.goalsList = state.goalsList.filter(goal => goal.id !== action.payload.id);
        },
        selectGoal : (state, action) => {
            state.goalSelected = action.payload;
        },
        clearSelectGoal: (state) => {
            state.goalSelected = null;
        }
    }
})

export const goalReducer = goalSlice.reducer;

export const { addGoalList, addGoal, updateGoalInList, selectGoal, clearSelectGoal, addTaskInGoalList, deleteGoalInList } = goalSlice.actions;