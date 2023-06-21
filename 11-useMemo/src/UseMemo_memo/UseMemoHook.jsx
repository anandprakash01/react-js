import { useState, useMemo, memo } from "react";

const Child = ({ user }) => {
  const { id } = user;
  console.log(`Child re-render, id:${id}`);
  return <h1>ID in child : {id}</h1>;
};

const OptimizedChild = memo(Child);

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(0);

  // this normal obj will give different reference in re-renders so even 'memo' optimize component will re-render
  //   const user = { id: anotherCount };

  // returns memoized value
  // This will only change the reference if another count is change that means it will re-render=
  const user = useMemo(() => {
    return { id: anotherCount };
  }, [anotherCount]);

  // const user = useRef({ id: anotherCount });
  // { id: 0 }

  // Method 1
  // const userRef = useRef();

  return (
    <main>
      <h1>Count : {count} </h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>

      <h1>Another Count : {anotherCount}</h1>
      <button onClick={() => setAnotherCount((c) => c + 1)}>Increment</button>

      <OptimizedChild user={user} />
    </main>
  );
};

export default UseMemoHook;
