import React, {memo, useMemo, useRef, useState} from "react";

const Child = ({user}) => {
    const {id} = user;
    // const {id} = user.current; // for useRef
    console.log(`Child re-rendered, id: ${id}`);
    return <p>anotherCount's ID in child: {id}</p>;
};

const OptimizedChild = memo(Child);

const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const [anotherCount, setAnotherCount] = useState(0);

    // const user = {id: anotherCount};
    // this normal obj will give different reference in re-renders so even 'memo' optimize component will re-render

    // useMemo returns memoized value
    // This will only change the reference if another count (value inside it) is changed that means it will re-render
    const user = useMemo(() => {
        return {id: anotherCount};
    }, [anotherCount]);

    // this will not cause the re-render even if the another count updates.

    // it will not update the id because on subsequent re-renders of the component, when useRef is called again, React recognizes that this is the same ref object that was created during the initial render. It does not create a new object; instead, it returns the existing ref object.
    // const user = useRef({id: anotherCount});

    return (
        <main>
            <p>Count : {count} </p>
            <button
                onClick={() => {
                    setCount(pre => pre + 1);
                }}
            >
                Increase Count and re-render Parent Component
            </button>

            <p>Another Count: {anotherCount}</p>
            <button
                onClick={() => {
                    setAnotherCount(pre => pre + 1);
                }}
            >
                Increase Another Count and re-render Child
            </button>

            {/* <Child user={user} /> */}
            <OptimizedChild user={user} />
        </main>
    );
};

export default UseMemoHook;
