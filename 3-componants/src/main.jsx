import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'

// const container = document.querySelector("#root");
// const root = createRoot(container);
// root.render(<App />);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
