import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Auth from "./components/Auth";
import { Banking } from "./components/Banking";
import Balance from "./components/Balance";
import { AccountStatus } from "./components/AccountStatus";

function App() {
  return (
    <>
      <Auth />
      <Balance />
      <Banking />
      <AccountStatus />
    </>
  );
}

export default App;
