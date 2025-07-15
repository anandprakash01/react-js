import React, {useState} from "react";

const UpdatingUseState = () => {
    const [count, setCount] = useState(0);

    function increase() {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // all these will only add once (i.e. last setCount);// react will only update from last

        //we can also pass fun inside State setter, this will increase count
        setCount(prev => {
            return prev + 1;
        });
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        // all these will cost only one re-render
    }
    console.log("Re-render, state updated with new value");
    return (
        <>
            <h1>{count}</h1>
            <button onClick={increase}>Update State</button>
        </>
    );
};

export default UpdatingUseState;
