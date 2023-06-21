import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Context from "./components/Context";
import { SendingCount } from "./components/SendingCount";
import PropsDrilling from "./components/PropsDrilling";
import UserCityChange from "./components/UserCityChange";
import ChangeCity from "./components/UserContextProvider/ChangeCity";

function App() {
  return (
    <>
      <h1>Hey:)</h1>
      {/* <Context /> */}
      {/* <PropsDrilling /> */}
      <SendingCount />
      <UserCityChange />
      <ChangeCity />
    </>
  );
}

export default App;
