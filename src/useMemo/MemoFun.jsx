import React, {memo, useState} from "react";

// memo -> Higher Order Component

const Child1 = ({user}) => {
    // if don't pass prop it will behave the same
    console.log("Child 1 re-rendered");
    return <div>Child 1</div>;
};

const Child2 = ({name}) => {
    console.log("Child 2 re-rendered");
    return (
        <div>
            <div>Child 2</div>
            <div>Name is :{name}</div>
        </div>
    );
};

//memo will return a component which will not re-render again if nothing has changed for this component
const OptimizedChild1 = memo(Child1);
const OptimizedChild2 = memo(Child2);
// optimized component will not re-render if its parent re-renders

const MemoFun = () => {
    // const OptimizedChild1 = memo(Child1);
    // Every time the parent component re-renders, a new memoized component will be created, so must be outside another component
    const [count, setCount] = useState(0);

    const user = {id: 10};
    // this normal obj will give different reference in re-renders so even 'memo' optimize component will re-render
    // in this useMemo will work

    return (
        <div>
            <p>Count: {count}</p>
            <button
                onClick={() => {
                    setCount(prev => prev + 1);
                }}
            >
                Increase Count
            </button>
            {/* <Child1 />
            <Child2 name="Anand" /> */}

            <OptimizedChild1 user={user} />
            <OptimizedChild2 name="Anand" />
        </div>
    );
};

export default MemoFun;
