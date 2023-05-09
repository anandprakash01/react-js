import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

//import components
import Header from "./components/Header/Header";
import Button from "./components/Button";
import Main from "./components/Main";

function App() {
  // Components

  // return (
  //   <>
  //     <Header />
  //     <Button />
  //     <Main />
  //     <Button />
  //   </>
  // );

  const imgUrl =
    "https://static.toiimg.com/thumb/msid-96933849,width-1280,resizemode-4/96933849.jpg";

  const disabled = "yes";

  // jsx expressions
  // jsx expression is just a curly breaces{} within jsx

  // return (
  //   <>
  //     <img src={imgUrl} alt="IronMan" />
  //     <button disabled={disabled == "yes"}>Button</button>
  //   </>
  // );

  const condition = true;
  // Conditional Rendering

  // if (condition) {
  //   return <h1>Condition is true</h1>;
  // }
  // return <h1>Condition is false</h1>;

  // const element = condition ? <h1>Condition is True</h1> : <h1>Condition is False</h1>;
  // return element;

  // const value = condition ? "Lucky" : "Unlucky";
  // return <h1>{`I am ${value}`}</h1>;

  // return <h1>{`I am ${condition ? "Lucky" : "Unlucky"}`}</h1>;

  //for nothing to return.
  //In previous versions of react if we didn't return anything it would throw error but now its fine

  // return null;

  const value = [<li>One</li>, <li>Two</li>, <li>Three</li>];
  return <ul>{value}</ul>;
  //In object for direct use like array it will throw an error
}

export default App;
