import React from "react";
import ReactDOM from "react-dom";
import "tailwindcss/dist/base.min.css";
import { GlobalStyles } from "twin.macro";
import App from "./App";
import { AppProvider } from "./shared/context";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ChakraProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
