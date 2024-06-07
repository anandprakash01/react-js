import { useState, useEffect } from "react";

function useCounter({ initialCount = 0 }) {
  //Custom Hook
  const [count, setCount] = useState(initialCount);
  const increment = (step = 1) => setCount((c) => c + step);
  const decrement = (step = 1) => setCount((c) => c - step);

  return { count, increment, decrement };
}

const ChildWithIncrement = () => {
  const { count, increment } = useCounter({ initialCount: 5 });
  /*
    const [count, setCount] = useState(0);
    const increment = () => setCount((c) => c + 1);
    const decrement = () => setCount((c) => c - 1);
    */

  return (
    <>
      <h1> Counter : {count}</h1>
      <button onClick={() => increment(5)}>Increment</button>
    </>
  );
};

const Parent = () => {
  const { count, increment, decrement } = useCounter({ initialCount: -10 });
  return (
    <>
      <h1> Counter : {count}</h1>
      <button onClick={() => increment(10)}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <hr />
      <ChildWithIncrement />
    </>
  );
};

function useMount(callback) {
  //Custom Hook
  useEffect(() => {
    callback();
  }, []);
}

const CustomHooks = () => {
  useMount(() => {
    //Using custom hook
    console.log("Ran on mount!");
  });

  return (
    <main>
      <Parent />
      <h1>useOnMount</h1>
    </main>
  );
};

export default CustomHooks;
