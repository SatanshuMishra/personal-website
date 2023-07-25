"use client";

import React, { useState, useEffect } from "react";
// import useDetectScroll, {
//   Axis,
//   Direction,
// } from "@smakss/react-scroll-direction";

type NavigationProps = {
  darkMode: boolean;
  setMode: (value: boolean) => void;
};

export default function Navigation({ darkMode, setMode }: NavigationProps) {
  // const [isScrollDown, setIsScrollDown] = useState(false);

  // const scrollDir = useDetectScroll({
  //   thr: 0,
  //   axis: Axis.Y,
  //   scrollUp: Direction.Up,
  //   scrollDown: Direction.Down,
  //   still: Direction.Still,
  // });

  // useEffect(() => {
  //   if (scrollDir === "down") {
  //     setIsScrollDown(true);
  //   } else if (scrollDir === "up") {
  //     setIsScrollDown(false);
  //   }
  // }, [scrollDir]);

  const options = [`About`, `Projects`, `Contact`];

  const [darkmode, setDarkMode] = useState(darkMode);
  const [scroll, setScroll] = useState(false);
  const [width, setWidth] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [showNavBg, setShowNavBg] = useState(false);

  useEffect(() => {
    setWidth(window.scrollY > 500);
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 800);
      // setShowNavBg(window.scrollY > 100);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth > 850);
    });
  });

  useEffect(() => {
    const onPageLoad = () => {
      setWidth(window.innerWidth > 850);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);

      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  const toggleNavigation = () => {
    setShowNav(!showNav);
  };

  const onToggle = () => {
    setDarkMode(!darkmode);
    setMode(darkmode);
  };
  // {`${isScrollDown ? `hidden` : `inline`}`}
  return (
    <div>
      <div
        className={`${
          darkmode
            ? `dark ${showNavBg ? `bg-newDark` : ``}`
            : `light ${showNavBg ? `bg-white` : ``}`
        } w-screen bg-opacity-90 fixed top-0 z-40`}
      >
        <div className="flex flex-row justify-between items-center px-4 py-2 text-xl">
          <h1 className="font-bold text-xl">
            {width ? "Satanshu.Mishra" : "S.M"}
          </h1>
          <ul className="flex flex-row justify-end items-center">
            {width ? (
              <>
                <li
                  className="px-4 py-2 font-semibold border-b-2 border-b-transparent cursor-pointer"
                  onClick={onToggle}
                >
                  {!darkmode
                    ? // <SunIcon className="h-7" onClick={onToggle} />
                      `.darkMode()`
                    : // <MoonIcon className="h-7" onClick={onToggle} />
                      `.lightMode()`}
                </li>
                {options.map((option, key) => {
                  return (
                    <li
                      key={key}
                      className={`px-4 py-2 font-semibold border-b-2 border-b-transparent ${
                        darkMode
                          ? `hover:border-b-white`
                          : `hover:border-b-black`
                      } duration-300 cursor-pointer no-underline`}
                    >
                      <a href={`#${option.toLowerCase()}`}>{option}</a>
                    </li>
                  );
                })}
                {scroll && (
                  <a
                    className="px-4 no-underline flex flex-col justify-center"
                    href="https://drive.google.com/file/d/1c4uMZIbuM26bXfpeh9_IyBSeXmDe0mm7/view?usp=sharing"
                    target="_blank"
                  >
                    {/* <SlideInLeft> */}
                    <button
                      className={`px-4 py-0.5 border-2 font-bold rounded-lg cursor-pointer duration-300 hover:duration-300 ${
                        darkmode
                          ? "border-white bg-transparent hover:border-white hover:bg-white hover:text-black"
                          : "border-black bg-newDark text-white hover:border-darkModeBackground hover:bg-white hover:text-black"
                      }`}
                    >
                      Resume
                    </button>
                    {/* </SlideInLeft> */}
                  </a>
                )}
              </>
            ) : (
              <>
                <li
                  className="px-4 py-2 font-semibold border-b-2 border-b-transparent cursor-pointer"
                  onClick={onToggle}
                >
                  {!darkmode ? `.darkMode()` : `.lightMode()`}
                </li>
                <li
                  className="px-4 pr-0 py-2 font-semibold border-b-2 border-b-transparent cursor-pointer"
                  onClick={toggleNavigation}
                >
                  .options()
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {showNav && (
        <div className="fixed h-screen w-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-90 z-50">
          <ul className="flex flex-col items-end justify-between h-[90%] text-white text-3xl py-8 mr-4">
            <div>
              <li
                className="px-8 py-2 font-bold cursor-pointer"
                onClick={toggleNavigation}
              >
                .close()
              </li>
            </div>
            <div>
              {options.map((option, key) => {
                return (
                  <a
                    key={key}
                    href={`#${option.toLowerCase()}`}
                    onClick={toggleNavigation}
                  >
                    <li className="mx-8 py-4 font-bold cursor-pointer no-underline">
                      {option}
                    </li>
                  </a>
                );
              })}
              {scroll && (
                <a
                  className="mx-4 px-4 no-underline flex flex-col justify-center"
                  href="https://drive.google.com/file/d/1c4uMZIbuM26bXfpeh9_IyBSeXmDe0mm7/view?usp=sharing"
                  target="_blank"
                >
                  <button className="my-4 py-0.5 border-2 border-white bg-transparent text-white font-bold text-2xl cursor-pointer hover:bg-white hover:text-black">
                    RESUME
                  </button>
                </a>
              )}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
