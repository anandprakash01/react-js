import { useState } from "react";
import "./style.css";

const CountuseState = () => {
  //   let count = 0;// This will not work
  const [count, setCount] = useState(0);
  const handleCount = () => {
    // count++;
    setCount(count + 1);
  };

  const [isStatusON, setIsStatusOn] = useState(true);
  const handelStatus = () => {
    setIsStatusOn(!isStatusON);
  };

  //Input
  const [university, setUniversity] = useState("");
  const handelInputChange = (event) => {
    setUniversity(event.target.value);
  };

  return (
    <main>
      <div className="box">
        <h1>{count}</h1>
        <button onClick={handleCount}>Increment</button>

        <h1>Status: {isStatusON ? "Yes" : "No"}</h1>
        <button onClick={handelStatus}>Toggle Status</button>
      </div>

      <div className="box">
        <h1>
          University : <input onChange={handelInputChange} value={university} type="text" />
        </h1>

        <h3>
          Output: <p>{university}</p>
        </h3>
      </div>
    </main>
  );
};

export default CountuseState;
