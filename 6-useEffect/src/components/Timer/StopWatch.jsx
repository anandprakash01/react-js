import { useEffect, useState } from "react";

let intervalId;
const Stopwatch = () => {
  //   const [timer, setTimer] = useState(0);

  //   const start = () => {
  //     clearInterval(intervalId); // for preventing multiple clicks to resister multiple setInterval
  //     intervalId = setInterval(() => {
  //       setTimer((pre) => pre + 1);
  //     }, 1000);
  //   };

  //   const stop = () => {
  //     clearInterval(intervalId);
  //   };
  //   const clear = () => {
  //     stop();
  //     setTimer(0);
  //   };
  //   return (
  //     <>
  //       <h1>{timer}</h1>
  //       <button onClick={start}>Start</button>
  //       <button onClick={stop}>Stop</button>
  //       <button onClick={clear}>Clear</button>
  //     </>
  //   );

  /*---------------------------------------------*/

  const [countdown, setCountdown] = useState(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) {
      intervalId = setInterval(() => {
        setCountdown((pre) => pre + 1);
      }, 1000);
      //cleanup function
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [enabled]);

  //   console.log("Rendered");

  const start = () => {
    setEnabled(true);
  };
  const stop = () => {
    setEnabled(false);
  };

  return (
    <>
      <h3>{countdown}</h3>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
};

export { Stopwatch };
