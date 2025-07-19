import React, {memo, useCallback, useState} from "react";

const Child = ({onClick}) => {
    console.log("Child re-render");
    return (
        <div>
            <button onClick={onClick}>Increment from Child</button>
        </div>
    );
};

const OptimizedChild = memo(Child);

const UseCallbackHook = () => {
    const [count, setCount] = useState(0);

    // useCallback :: the callback fun is memoized
    const handleClick = useCallback(() => {
        // console.log("setCount ran");
        setCount(prev => prev + 1);
    }, []);

    // if parent will re-render child will also re-render because this fun is re-created on every render so that the reference
    // const handleClick = () => {
    //     setCount(prev => prev + 1);
    // };

    return (
        <>
            <div>
                <h4>Count:{count}</h4>
                <button onClick={handleClick}>Increment From parent</button>
                <OptimizedChild onClick={handleClick} />
            </div>
            <hr />
        </>
    );
};

export default UseCallbackHook;
