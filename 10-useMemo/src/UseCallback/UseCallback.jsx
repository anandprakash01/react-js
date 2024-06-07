import { useState, memo, useRef, useMemo, useCallback } from "react";

const Child = ({ handleClick }) => {
  console.log("Child re-render");
  return (
    <div>
      <button onClick={handleClick}>Increment from child</button>
    </div>
  );
};
// Cache : <h1>Child</h1>
const OptimizedChild = memo(Child);

export const UseCallback = () => {
  const [count, setCount] = useState(0);

  //   const handleClick = () => {
  //     setCount((c) => c + 1);
  //   };

  // useMemo whatever returns that is memoized
  // useCallback :: the callback fun is memoized
  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
    // count => 0
  }, []);

  // const handleClick = useMemo(() => {
  //   return () => {
  //     setCount((c) => c + 1);
  //   };
  // }, []);

  return (
    <main>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <OptimizedChild handleClick={handleClick} />
    </main>
  );
};
