import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Basic } from "./components/useEffectBasic/Basic";
import MainuseEffect from "./components/useEffectBasic/Uses";
import { UsesRerender } from "./components/useEffectBasic/UsesRerender";

function App() {
  return (
    <>
      {/* <Basic /> */}
      {/* <MainuseEffect /> */}
      <UsesRerender />
    </>
  );
}

export default App;
