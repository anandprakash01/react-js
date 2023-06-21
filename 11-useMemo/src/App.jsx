import { useState } from "react";
import viteLogo from "/vite.svg";

import CustomHooks from "./customHooks/CustomHooks";
import { MemoFunction } from "./UseMemo_memo/MemoFunction";
import UseMemoHook from "./UseMemo_memo/UseMemoHook";
import { FormHandle } from "./UseMemo_memo/FormHandle";
import { UseCallback } from "./UseCallback/UseCallback";
import { ModalCoponent } from "./Portal/Model";
import ClassComponent from "./ClassComponent/ClassComponent";

function App() {
  return (
    <>
      <h1>Hey:)</h1>
      {/* <CustomHooks /> */}
      <hr />
      {/* <MemoFunction /> */}
      {/* <UseMemoHook /> */}
      {/* <FormHandle /> */}
      {/* <UseCallback /> */}
      <hr />
      <ModalCoponent />
      <ClassComponent />
    </>
  );
}

export default App;
