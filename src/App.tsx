import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Calculator from "./components/Calculator";
import SwitchButton from "./components/SwitchButton";
import useTheme from "./hooks/useTheme";

const App: React.FC = () => {
  const { darkMode, toggleMode } = useTheme();

  return (
    <div className={`root ${darkMode ? "dark" : "light"}`}>
      <ToastContainer limit={1} />
      <SwitchButton
        offIcon="fa-solid fa-sun"
        onIcon="fa-solid fa-moon"
        on={darkMode}
        toggle={toggleMode}
      />
      <Calculator />
    </div>
  );
};

export default App;
