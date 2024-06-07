import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    // <div>
    //   <header>Header</header>
    //   <main>Main</main>
    //   <footer>Footer</footer>
    // </div>

    //react Fragments==> <> </>
    <>
      <header>Header</header>
      <main>Main</main>
      <footer>Footer</footer>

      {/* // for and class is reserved keyword in javaScript
    //  so use htmlFor and className */}

      <input className="" type="text" id="name" />
      {/* <label for="name"></label> */}
      <label htmlFor="name">Name</label>
    </>
  );
}

export default App;
