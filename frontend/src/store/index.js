import { configureStore } from "@reduxjs/toolkit";
import { memberReducer } from "./member/member-slice.js"

const store = configureStore({
    reducer: {
        MEMBER: memberReducer,
    }
})

export { store };