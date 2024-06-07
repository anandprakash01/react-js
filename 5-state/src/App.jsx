import {useState} from "react";

import Count from "./components/CountuseState/CountuseState";
import {ObjuseState} from "./components/ObjuseState/ObjuseState";
import {ComplexFormState} from "./components/ComplexFormState/ComplexFormState";
import {ArrayUseState} from "./components/ArrayuseState/ArrayuseState";
import {FormValidation} from "./components/FormValidatation/FormValidation";
import {AsynchronousStateUpdate} from "./components/AsynchronousStateUpdate/AsynchronousStateUpdate";
import {LazyState} from "./components/LazyStateInitilization/LazyState";
import {FormValidation2} from "./components/FormValidation2/FormValidation2";

function App() {
  return (
    <>
      <Count />
      <ObjuseState />
      <ComplexFormState />
      <ArrayUseState />
      <FormValidation />
      <AsynchronousStateUpdate />
      <LazyState />
      <FormValidation2 />
    </>
  );
}

export default App;
