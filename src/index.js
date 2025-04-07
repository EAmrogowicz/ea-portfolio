import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeProviderWrapper from "./context/ThemeProviderWrapper";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
