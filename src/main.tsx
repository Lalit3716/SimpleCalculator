import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./context/ThemeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultDarkMode>
    <App />
  </ThemeProvider>
);
