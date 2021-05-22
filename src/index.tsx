import React from "react";
import ReactDOM from "react-dom";
import "tailwindcss/dist/base.min.css";
import { GlobalStyles } from "twin.macro";
import App from "./App";
import { AppProvider } from "./shared/context";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
