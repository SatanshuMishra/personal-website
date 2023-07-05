import { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import TechStack from "./components/TechStack";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const setModeHandler = (value) => {
    setDarkMode(!value);
  };
  return (
    <div>
      <Navigation darkmode={darkMode} setMode={setModeHandler} />
      <Home darkmode={darkMode} />
      <About darkmode={darkMode} />
      <TechStack darkmode={darkMode} />
    </div>
  );
}

export default App;
