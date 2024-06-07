import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// =====================================================

// const containner = document.getElementById('root');
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
