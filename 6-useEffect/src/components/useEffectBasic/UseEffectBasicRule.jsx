import { useState } from "react";
const BasicRule = () => {
  const [count, setCount] = useState(0);

  function increase() {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // all these will only add once (i.e. last setCount);// react will only update from last

    //we can also pass fun inside State setter, this will increase count
    setCount((mostUpToDateCount) => {
      return mostUpToDateCount + 1;
    });
    setCount((mostUpToDateCount) => mostUpToDateCount + 1);
    setCount((mostUpToDateCount) => mostUpToDateCount + 1);
    // all these will cost only one re-render
  }
  console.log("Re-render");
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>Count Increase</button>
    </>
  );
};
export { BasicRule };
