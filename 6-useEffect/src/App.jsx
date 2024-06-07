import {useState} from "react";

import {Basic} from "./components/useEffectBasic/Basic";
import {Uses} from "./components/useEffectBasic/Uses";
import {UsesRerender} from "./components/useEffectBasic/UsesRerender";
import {BasicRule} from "./components/useEffectBasic/UseEffectBasicRule";
import {APIs} from "./components/APIs/APIs";
import IncrementCount from "./components/PassingStateToChildAsProp/IncrementCount";
import LiftingStateUp, {
  ChangeNoState,
  Parent,
} from "./components/PassingStateToChildAsProp/LiftingStateUp";
import {CountDown} from "./components/Timer/CountDown";
import {Stopwatch} from "./components/Timer/StopWatch";

function App() {
  return (
    <>
      {/* <Basic /> */}
      {/* <Uses /> */}
      {/* <UsesRerender /> */}
      {/* <BasicRule /> */}
      {/* <APIs /> */}
      {/* <IncrementCount /> */}
      {/* <LiftingStateUp /> */}
      {/* <ChangeNoState /> */}
      {/* <Parent /> */}
      <CountDown />
      <Stopwatch />
    </>
  );
}

export default App;
