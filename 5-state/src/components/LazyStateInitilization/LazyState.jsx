import { useState } from "react";

/** Lazy State Initialization */

// const getInitialState = () => {
//   return { id: 1, city: "Hyderabad" };
// };

export const LazyState = () => {
  // Problem 1 : Re-creating this function
  const getInitialState = () => {
    return { id: 1, city: "Hyderabad" };
  };

  // const initialState = getInitialState();
  // Problem 2 : Calling this function even after the first render
  // const [user, setUser] = useState(getInitialState());
  const [user, setUser] = useState(getInitialState);
  //we can give only function name without calling it this will solve the problem and not call it again after first render

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h1>{user.city}</h1>
    </div>
  );
};
