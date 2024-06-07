import {useState} from "react";

import Props from "./components/props";
import Filter from "./components/filter";
import PropsChildren from "./components/props-children";
import PropsDrilling from "./components/props-drilling";
import DestructureProps from "./components/props-destructure";

function App() {
  return (
    <>
      {/* <Props /> */}
      {/* <Filter /> */}
      {/* <PropsChildren /> */}
      <PropsDrilling />
      <DestructureProps />
    </>
  );
}

export default App;
