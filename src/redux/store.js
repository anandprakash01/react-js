import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

// getState() is a core method provided by the store that allows you to access the current state of your entire application.
console.log(store.getState());
