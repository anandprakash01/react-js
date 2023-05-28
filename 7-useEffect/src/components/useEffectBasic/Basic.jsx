import { useEffect, useState } from "react";

// Side-Effect
// 1. Changing title of the page
// 2. Make API calls
// 3. Timer and Intervals

const Child = () => {
  useEffect(() => {
    console.log("Child component mounted!");

    // whaever useEffect returns it runs just before the component is unmounted
    return () => {
      console.log("Child component unmounted!");
    };
  }, []);

  return <h1>Child</h1>;
};

const Basic = () => {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(0);

  const [user, setUser] = useState("");

  useEffect(() => {
    console.log("App component mounted!");
  }, []);

  useEffect(() => {
    console.log("depends on Another Count");
  }, [anotherCount]);

  return (
    <main>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr />
      <h1>Another Count : {anotherCount}</h1>
      <button onClick={() => setAnotherCount(anotherCount + 10)}>Increment</button>
      <hr />
      {count % 5 != 0 && <Child />}
    </main>
  );
};

export { Basic };
