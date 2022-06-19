import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Calculator from "./components/Calculator";

const App: React.FC = () => (
  <div>
    <ToastContainer limit={1} />
    <Calculator />
  </div>
);

export default App;
