import { useEffect, useState } from "react";

const Todo = ({ id }) => {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    (async () => {
      const data = await (await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)).json();

      //   const response = await fetch(
      //     `https://jsonplaceholder.typicode.com/todos/${id}`
      //   );
      //   const data = await response.json();
      setTodo(data);
    })();
  }, [id]);

  return <h3>{todo.title}</h3>;
};

const PassingStateProps = () => {
  const [id, setId] = useState(1);

  const showNextTodo = () => {
    setId((prevId) => prevId + 1);
  };

  return (
    <main>
      <Todo id={id} />
      <button onClick={showNextTodo}>Show next todo</button>
    </main>
  );
};

const Child = ({ number, changeNumber }) => {
  return (
    <>
      <h3>Child : {number}</h3>
      <button onClick={changeNumber}>Increment</button>
    </>
  );
};

const ChangeNoState = () => {
  const [count, setCount] = useState(0);

  const updateNumber = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <main>
      <Child number={count} changeNumber={updateNumber} />
    </main>
  );
};

const ChildOne = ({ count, updateCount }) => {
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={updateCount}>Increment</button>
    </div>
  );
};

const ChildTwo = ({ count }) => {
  return (
    <div>
      <h3>Count is {count}</h3>
      <h1>🎉</h1>
    </div>
  );
};

const Parent = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <main>
      <section>
        <ChildOne count={count} updateCount={updateCount} />
        <ChildTwo count={count} />
      </section>
    </main>
  );
};
export default PassingStateProps;
export { ChangeNoState };
export { Parent };
