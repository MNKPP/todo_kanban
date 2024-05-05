import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskList: [],
    taskSelected: null
}

export const taskSlice = createSlice({
    name: "taskSlice",
    initialState,
    reducers: {
        addTaskList: (state, action) => {
            state.taskList = action.payload;
        },
        addTask: (state, action) => {
            state.taskList.push(action.payload);
        },
        updateTaskInList: (state, action) => {
            state.taskList = state.taskList.map(task => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        ...action.payload
                    };
                }
                return task;
            });
        },
        selectTask : (state, action) => {
            state.taskSelected = action.payload;
        },
        clearSelectTask: (state) => {
            state.taskSelected = null;
        }
    }
})

export const taskReducer = taskSlice.reducer;

export const { addTaskList, addTask, updateTaskInList, selectTask, clearSelectTask } = taskSlice.actions;