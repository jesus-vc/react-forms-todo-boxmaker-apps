import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./appColorBoxMaker/App.js";
import App from "./appTodo/App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
