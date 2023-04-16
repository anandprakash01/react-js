import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Header Component
const Header = () => {
  return (
    <>
      <Button />
      <header>This is header</header>
    </>
  );
};

// Nav Component
function Nav() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>FAQ</li>
      </ul>
    </nav>
  );
}

// Main Component
const Main = () => {
  return (
    <main>
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quis!
      </article>
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quis!
      </article>
    </main>
  );
};

const Button = () => {
  return <button>re-Usable button</button>;
};

// App
function App() {
  return (
    <>
      <Header />
      <Button />
      <Nav />
      <Main />
      <Button />
    </>
  );
}

export default App;
