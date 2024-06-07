import { useState, memo } from "react";

// memo -> Higher Order Component

const Child1 = () => {
  // No props
  console.log("Child 1 re-render");
  return <h1>Name:Anand Prakash</h1>;
};
// Cache : <h1>Child</h1>

const Child2 = ({ name }) => {
  console.log("Child 2 re-render");
  return <h1>Name is: {name}</h1>;
};

//memo will return a component which will not re-render again if nothing has changed for this component
const OptimizedChild1 = memo(Child1);
const OptimizedChild2 = memo(Child2);

export const MemoFunction = () => {
  const [count, setCount] = useState(0);
  const name = "hr";

  return (
    <main>
      <h1>Count : {count} </h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>

      {/* <Child1 /> */}
      <OptimizedChild1 />

      {/* <Child2 name="Anand" /> */}
      <OptimizedChild2 name="Anand" />
      <OptimizedChild2 name={name} />
      <OptimizedChild2 name={count} />
    </main>
  );
};
