import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from react-dom/client
import App from "./App";
import ThemeProviderWrapper from "./context/ThemeProviderWrapper";

// Create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app using createRoot
root.render(
  <React.StrictMode>
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  </React.StrictMode>
);
