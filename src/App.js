import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";
import Alert from "./Components/Alert";

const App = () => {
  const [mode, setMode] = useState(`light`);
  const [alert, setalert] = useState(null);
  function showAlert(message, type) {
    setalert({
      msg: message,
      typeof: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggle = () => {
    if (mode === `light`) {
      setMode(`dark`);
      document.body.style.backgroundColor = "#000810";
      showAlert("Dark mode has been enabled", `success`);
    } else {
      setMode(`light`);
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", `success`);
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggle} />
      <Alert alert={alert} />

      <Textform
        showAlert={showAlert}
        heading="Enter your text below"
        mode={mode}
      />
    </>
  );
};

export default App;
