import {useState} from "react";

/** Lazy State Initialization */

const getInitialState = () => {
    console.log("RE-RENDERED");
    return {id: 1, city: "Hyderabad"};
};

export const LazyState = () => {
    // Problem 1 : Re-creating this function
    // const getInitialState = () => {
    //     console.log("re-rendered");
    //     return {id: 1, city: "Hyderabad"};
    // };

    // const initialState = getInitialState();
    // Problem 2 : Calling this function even after the first render
    // const [user, setUser] = useState(getInitialState());
    const [user, setUser] = useState(getInitialState);
    //we can give only function name without calling it this will solve the problem and not call it again after first render

    const handleChange = () => {
        setUser({...user, city: "Beohari"});
    };

    return (
        <div>
            <h3>ID: {user.id}</h3>
            <h3>{user.city}</h3>
            <button onClick={handleChange}>Change</button>
        </div>
    );
};
