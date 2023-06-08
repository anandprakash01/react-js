import { useEffect, useState } from "react";

let intervalId;
const CountDown = () => {
  const [countdown, setCountdown] = useState(10);

  // useEffect(() => {
  //   intervalId = setInterval(() => {
  //     setCountdown((preCountDown) => preCountDown - 1);
  //   }, 1000);
  // }, []);
  // if (countdown == 0) {
  //   clearInterval(intervalId);
  // }

  // Using setTimeout
  useEffect(() => {
    if (countdown != 0) {
      setTimeout(() => {
        setCountdown((pre) => pre - 1);
      }, 1000);
    }
  }, [countdown]);

  return (
    <>
      <h2>Countdown : {countdown}</h2>
    </>
  );

  // ---------------------------------------
};
export { CountDown };
