import { useEffect, useState } from "react";

const IncrementCount = () => {
  const [value, setValue] = useState(true);
  const [count, setCount] = useState(0);

  const toggle = () => {
    setValue((prevState) => !prevState);
  };

  const increment = () => {
    setCount((prevState) => prevState + 1);
    setCount(count + 1);
  };

  return (
    <main>
      <h3>{value ? "on" : "off"}</h3>
      <button onClick={toggle}>Toggle</button>
      <hr />
      <h3>Count : {count}</h3>
      <button onClick={increment}>Increment</button>
    </main>
  );
};
export default IncrementCount;
