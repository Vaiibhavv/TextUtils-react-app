
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, darkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };

  const toggleBtn = () => {
    if (mode === "light") {
      darkMode("dark");
      document.body.style.backgroundColor = "rgb(45, 50, 70)";
      showAlert(" Dark Mode is eanbled ", "success");
    } else {
      darkMode("light");
      document.body.style.backgroundColor = "rgba(78, 78, 166, 0.468)";
      showAlert(" Light mode is enabled ", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About Us"
          mode={mode}
          darkBtn={toggleBtn}
        />
         { <Alert alert={alert} />}
        <Routes>
            <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert}/>} />
           <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
      </Router>

      {/* <About/> */}
    </>
  );
}

export default App;
