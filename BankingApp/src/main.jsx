import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { MantineProvider } from "@mantine/core";
import { Provider as ReactReduxProvider } from "react-redux";
import { createStore } from "redux";
import bankingReducer from "./reducers/BankingReducers.js";

// const store = createStore(bankingReducer);
const store = createStore(
  bankingReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <ReactReduxProvider store={store}>
      <App />
    </ReactReduxProvider>
  </MantineProvider>
);
