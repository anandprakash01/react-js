import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";
import App from "./App.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
