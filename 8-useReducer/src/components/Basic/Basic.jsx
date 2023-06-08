import { useReducer, useEffect } from "react";
import Loader from "../Loader/Loader";

// when multiple states are interdependent then only use useReducer

// const INITIAL_STATE = {
//   count: 0,
// };
// const reducer = (state, action) => {
//   if (action.type == "INCREASE") {
//     // By returning a new state, the component re-renders
//     return { count: state.count + 1 };
//   }
//   if (action.type == "DECREASE") {
//     return { count: state.count - 1 };
//   }
//   return state;
// };

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: "", users: [] };
    case "SUCCESS":
      return { loading: false, error: "", users: action.payload };
    case "ERROR":
      return { loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};

const Basic = () => {
  //   const [state, dispatch] = useReducer(reducer, INITIAL_STATE);s
  //   const increase = () => {
  //     dispatch({ type: "INCREASE" });
  //   };
  //   const decrease = () => {
  //     dispatch({ type: "DECREASE" });
  //   };
  //   return (
  //     <>
  //       <h1>{state.count}</h1>
  //       <button onClick={increase}>Increase</button>
  //       <button onClick={decrease}>Decrease</button>
  //     </>
  //   );

  //   ======================================================

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    (async () => {
      dispatch({ type: "LOADING" });
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
          throw new Error(`API failure : ${response.status}`);
          // { message: `API failure : ${response.status}` }
        }

        const data = await response.json();
        dispatch({ type: "SUCCESS", payload: data });
      } catch (e) {
        dispatch({ type: "ERROR", payload: e.message });
      }
    })();
  }, []);

  if (state.loading) {
    return <Loader />;
  }
  if (state.error) {
    return <h3>{state.error}</h3>;
  }

  return (
    <main>
      {state.users.map((user) => (
        <h3>{user.name}</h3>
      ))}
    </main>
  );
};

export default Basic;
