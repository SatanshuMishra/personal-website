"use client";

import { useState } from "react";
import "./globals.css";

import Navigation from "./components/Navigation";
import HomeComponent from "./components/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Spotlight from "./components/Spotlight";
import Projects from "./components/Projects";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const setModeHandler = (value: boolean) => {
    setDarkMode(!value);
  };
  return (
    <>
      <main className={`${darkMode ? `bg-newDark` : `bg-transparent`} -z-50 `}>
        <Spotlight darkMode={darkMode} />
        <Navigation darkMode={darkMode} setMode={setModeHandler} />
        <HomeComponent darkMode={darkMode} />
        <About darkMode={darkMode} />
        <TechStack darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} suppressHydrationWarning />
      </main>
    </>
  );
}
