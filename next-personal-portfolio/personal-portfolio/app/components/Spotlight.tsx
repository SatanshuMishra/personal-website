import React, { useEffect, useState } from "react";

type SpotlightProps = {
  darkMode: boolean;
};

export default function Spotlight({ darkMode }: SpotlightProps) {
  useEffect(() => {
    const updateMousePosition = (event: any) => {
      let spotlight = document.querySelector<HTMLElement>("#spotlight");
      // window.scrollY +
      if (spotlight)
        spotlight.style.top = event.clientY - spotlight.offsetHeight / 2 + "px";
      if (spotlight)
        spotlight.style.left = event.clientX - spotlight.offsetWidth / 2 + "px";
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("scroll", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  return (
    <div
      id="spotlight"
      className={`${
        darkMode ? `spotlight-dark` : `spotlight-light`
      } fixed w-[1000px] h-[1000px] rounded-full z-10`}
    ></div>
  );
}
