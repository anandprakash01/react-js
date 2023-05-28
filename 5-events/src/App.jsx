import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Button from "./components/Button";
import ObjClick from "./components/ObjClick";
import InputEvent from "./components/InputEvents";
import { AlertButton } from "./components/AlertButton/AlertButton";
import { EventBubbling } from "./components/EventBubbling/EventBubbling";
import { Form } from "./components/Form/Form";
import { SelectTag } from "./components/SelectTag/SelectTag";

function App() {
  return (
    <>
      {/* <Button /> */}
      {/* <ObjClick /> */}
      {/* <AlertButton /> */}
      {/* <InputEvent /> */}
      {/* <EventBubbling /> */}
      {/* <Form /> */}
      <SelectTag />
    </>
  );
}

export default App;
