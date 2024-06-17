import {useState} from "react";

import ClassLifeCycle from "./components/ClassLifeCycle";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  setTimeout(() => {
    setIsVisible(false);
  }, 5000);

  return <>{isVisible ? <ClassLifeCycle /> : <h1>LifeCycle Dom is not mounted</h1>}</>;
}

export default App;
