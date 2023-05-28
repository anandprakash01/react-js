import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// import Styles from "./components/Styles";
import Props from "./components/Props";
import Filter from "./components/Filter";
import PropsChildren from "./components/PropsChildren";
import PropsDrilling from "./components/PropsDrilling";
import DestructureProps from "./components/DestructureProps";

// theses import contains css properties and classes so same className will override

function App() {
  return (
    <>
      {/* <Styles /> */}
      {/* <Props /> */}
      {/* <Filter /> */}
      {/* <PropsChildren /> */}
      <PropsDrilling />
      <DestructureProps />
    </>
  );
}

export default App;
