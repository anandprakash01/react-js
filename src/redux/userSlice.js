import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: "Guest User",
    email: "guest@gmail.com",
    count: 0,
};

const userSlice = createSlice({
    name: "user", //slice name
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        increment: (state, action) => {
            state.count += action.payload || 1;
        },
        decrement: (state, action) => {
            state.count -= action.payload || 1;
        },
    },
});

export const {setEmail, setName, increment, decrement} = userSlice.actions;
export default userSlice.reducer;
