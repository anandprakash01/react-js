import { useEffect, useState } from "react";

// Cleanups
const Child = ({ count }) => {
  useEffect(() => {
    console.log("Child effect ran", count);

    return () => {
      console.log("Child cleanup ran on unmounting", count);
    };
  }, []);

  //depends on count
  useEffect(() => {
    console.log("Child effect ran depends on Count", count);

    return () => {
      console.log("Child cleanup ran depends on Count", count);
    };
  }, [count]);

  return <h1>Child : {count}</h1>;
};

const Parent = () => {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(0);

  return (
    <main>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <h2>Count {count}</h2>
      <button onClick={() => setAnotherCount(anotherCount + 1)}>Increment Another Count</button>
      <h2>Another Count {anotherCount}</h2>
      <hr />
      {count < 5 && <Child count={count} />}
    </main>
  );
};

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    if (isEnabled) {
      function handleMouseMove(event) {
        // event.clientX, event.clientY
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
      }
      console.log("Mouse event handler added");
      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        console.log("Mouse event handler removed");
      };
    }
  }, [isEnabled]);

  function toggleMouseTracking() {
    setIsEnabled(!isEnabled);
  }

  return (
    <>
      <button onClick={toggleMouseTracking}>Mouse Tracking : {isEnabled ? "ON" : "OFF"}</button>
      <h1>
        {mousePosition.x} / {mousePosition.y}
      </h1>
    </>
  );
}

const UsesRerender = () => {
  return (
    <>
      <Parent />
      <MouseTracker />
    </>
  );
};
export { UsesRerender };
