import React, {useReducer} from "react";

// when multiple states are interdependent then only use useReducer
const UseReducerHook = () => {
    const initialState = {
        count: 0,
        message: "",
    };
    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREASE":
                return {count: state.count + action.payload, message: "Count Increased"};
            case "DECREASE":
                return {count: state.count - action.payload, message: "Count Decreased"};
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const increase = () => {
        dispatch({type: "INCREASE", payload: 5});
    };
    const decrease = () => {
        dispatch({type: "DECREASE", payload: 5});
    };

    return (
        <>
            <div>useReducer Count : {state.count}</div>
            <p>{state.message}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </>
    );
};

export default UseReducerHook;
