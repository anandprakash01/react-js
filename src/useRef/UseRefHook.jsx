import {useState, useEffect, useRef} from "react";

/*  1️⃣st Use Case of useRef :
    to Get the actual HTML DOM element so that we can manipulate it within our code.*/

const UseRefHook = () => {
    const inputRef = useRef(null);
    // console.log(inputRef); // { current: null }

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const focusEle = () => {
        inputRef.current.focus();
    };
    const blurEle = () => {
        inputRef.current.blur();
    };

    /* 2️⃣nd Use case of useRef 
            to create state which remembers pre value and does not trigger re-renders */

    const [count, setCount] = useState(0);
    const copyOfCount = useRef(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1); /* THIS TRIGGERS A RE-RENDER */
    };
    const incrementCopyOfCount = () => {
        copyOfCount.current += 1; /* THIS DOES NOT TRIGGER A RE-RENDER */
    };

    return (
        <>
            <main>
                <input
                    ref={inputRef}
                    id="firstName"
                    type="text"
                    placeholder="Focus me!"
                />
                <br />
                <br />
                <button onClick={focusEle}>Focus!</button>
                <button onClick={blurEle}>Blur!</button>
                <hr />
                <h3>Count : {count}</h3>
                <h3>Ref : {copyOfCount.current}</h3>

                <button onClick={incrementCount}>Increment State</button>
                <button onClick={incrementCopyOfCount}>Increment ref</button>
            </main>
            <hr />
        </>
    );
};

export default UseRefHook;
