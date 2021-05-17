import React from "react";
import ReactDOM from "react-dom";
import "tailwindcss/dist/base.min.css";
import { GlobalStyles } from "twin.macro";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
