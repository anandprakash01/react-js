import {useState} from "react";

//import components
import Header from "./components/header"; // it will take default import from the folder ie. index.jsx
import Button from "./components/button";
import Main from "./components/main/Main"; //main/Main-> because not imported from index.jsx
import Style from "./components/styles";

function App() {
  const imgUrl =
    "https://static.toiimg.com/thumb/msid-96933849,width-1280,resizemode-4/96933849.jpg";
  const disabled = "yes";

  const style = {
    width: "200px",
    height: "150px",
  };

  // JSX expression:-> jsx expression is just a curly breaces{} within jsx

  const value = [<li>One</li>, <li>Two</li>, <li>Three</li>];
  const condition = true;
  const element = condition ? <h1>Condition is True</h1> : <h1>Condition is False</h1>;

  return (
    <>
      <Header />
      <Button />
      <Main />
      <img src={imgUrl} alt="IronMan" style={style} />
      <button disabled={disabled == "yes"}>Button</button>
      {/* Conditional Rendering  */}
      <h1>{`I am ${condition ? "Lucky" : "Unlucky"}`}</h1>;
      {/* can't use object like array, it will throw an error */}
      <ul>{value}</ul>
      {/* For nothing to return: In previous versions of react if we didn't return anything it would throw error but now its fine */}
      <Style />
    </>
  );
}

export default App;
