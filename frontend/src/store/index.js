import { configureStore } from "@reduxjs/toolkit";
import { memberReducer } from "./member/member-slice.js"
import { goalReducer } from "./goal/goal-slice.js";
import { taskReducer } from "./task/task-slice.js";

const store = configureStore({
    reducer: {
        MEMBER: memberReducer,
        GOAL: goalReducer,
        TASK: taskReducer
    }
})

export { store };