import { configureStore } from "@reduxjs/toolkit";
import { memberReducer } from "./member/member-slice.js"
import { goalReducer } from "./goal/goal-slice.js";

const store = configureStore({
    reducer: {
        MEMBER: memberReducer,
        GOAL: goalReducer,
    }
})

export { store };