import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import About from "./components/About";

const App = () => {
  const [mode, setMode] = useState("light");
  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#364553";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <Router>
      <Navbar
        title="TextUtil "
        about="About US"
        handleMode={handleMode}
        mode={mode}
      />
      <Routes>
        <Route
          exact path="/"
          element={<TextForm header="Enter Your text here" mode={mode} />}
        />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};
export default App;
