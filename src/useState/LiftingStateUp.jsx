import React, {useState} from "react";

// Lifting state up in React is a pattern where you move the state from a child component to its closest common parent component. This is done when multiple child components need to share or communicate with the same piece of state.

//Common Parent
const LiftingStateUp = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <ChildOne count={count} />
            <ChildTwo count={count} updateCount={setCount} />
        </>
    );
};

const ChildOne = ({count}) => {
    return <h3>Count is :{count}</h3>;
};

const ChildTwo = ({count, updateCount}) => {
    return (
        <button
            onClick={() => {
                updateCount(count + 1);
            }}
        >
            Update Count and Lift the state up
        </button>
    );
};

export default LiftingStateUp;
