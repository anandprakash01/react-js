import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);

// const container = document.getElementById('root');
// const container = document.querySelector("#root");
// const root = createRoot(container);
// root.render(<App />);
