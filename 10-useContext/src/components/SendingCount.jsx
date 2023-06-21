import {
  useEffect,
  useReducer,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";

const ComponentC = () => {
  const { setCount } = useContext(UserCount);
  return (
    <div style={{ border: "1px solid #40128B", padding: "1rem" }}>
      <h3>Component C </h3>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

const ComponentB = () => {
  return (
    <div>
      <h3>Component B</h3>
      {/* <ComponentC userName="Oscar Isaac" /> */}
      <ComponentC />
    </div>
  );
};

const ComponentA = () => {
  // props -> { userName: 'Oscar Isaac' }

  return (
    <div>
      <h3>Component A </h3>
      {/* <ComponentB userName="Oscar Isaac" /> */}
      <ComponentB />
    </div>
  );
};

/**
 * Context
 * Problem : Prop drilling
 *
 * Two important concepts :
 * 1. Provide a value ✅
 * 2. Consume a value ✅
 */

/* createContext returns a Context Object */
/* Make sure to name it in PascalCase */
const UserCount = createContext();

// UserCount.Provider -> A React Component

const SendingCount = () => {
  /** Context value */
  const userName = "Oscar Isaac";
  const [count, setCount] = useState(0);

  return (
    <main>
      <div
        style={{
          border: "1px solid #40128B",
          padding: "1rem",
          marginTop: "1rem",
        }}
      >
        <h3>App Count : {count} </h3>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </div>
      <UserCount.Provider value={{ setCount }}>
        <ComponentA />
      </UserCount.Provider>
    </main>
  );
};

// Named Export
export { SendingCount };
