import { useState } from "react";
import "./style.css";

export const ArrayUseState = () => {
  const [count, setCount] = useState([1]);

  const handleIncrement = () => {
    const lastEl = count[count.length - 1];
    // count.pust(lastEl + 1);

    setCount([...count, lastEl + 1]);
  };
  return (
    <div>
      <div className="elements">
        {count.map((el) => {
          return <span>{el}</span>;
        })}
      </div>
      <button onClick={handleIncrement}>Increase</button>
    </div>
  );
};
