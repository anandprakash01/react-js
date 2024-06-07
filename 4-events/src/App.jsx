import {useState} from "react";

import Button from "./components/Button";
import ObjClick from "./components/ObjClick";
import InputEvent from "./components/InputEvents";
import {AlertButton} from "./components/AlertButton/AlertButton";
import {EventBubbling} from "./components/EventBubbling/EventBubbling";
import {Form} from "./components/Form/Form";
import {SelectTag} from "./components/SelectTag/SelectTag";

function App() {
  return (
    <>
      <Button />
      <ObjClick />
      <AlertButton />
      <InputEvent />
      <EventBubbling />
      <Form />
      <SelectTag />
    </>
  );
}

export default App;
