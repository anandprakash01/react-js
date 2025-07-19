import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setName, setEmail, increment, decrement} from "./userSlice.js";

// 1.Create a Redux Slice
// 2.Configure the Redux Store
// 3.Provide the Store to the App
// 4.Use Redux Hooks in Components

// ====> Configure Redux Store to Persist Storage (using Redux-Persist)
// 1. Install redux-persist
// 2. Modify Store Configuration - store.js:
//  persistStore, persistReducer from redux-persist, and a storage engine (e.g., localStorage).

const Redux = () => {
    const name = useSelector(state => state.user.name);
    const {email, count} = useSelector(state => state.user);

    const dispatch = useDispatch();
    return (
        <>
            <h2>Redux</h2>
            <div>
                <div>{name}</div>
                <div>{email}</div>
                <div>{count}</div>
                <button
                    onClick={() => {
                        dispatch(increment(10));
                    }}
                >
                    Increment
                </button>
                <button
                    onClick={() => {
                        dispatch(decrement(5));
                    }}
                >
                    Decrement
                </button>
            </div>
            <hr />
        </>
    );
};

export default Redux;
