import React from "react";

type AboutProps = {
  darkMode: boolean;
};

export default function About({ darkMode }: AboutProps) {
  const darkmode = darkMode;
  return (
    <div
      className={`${
        darkMode ? "dark" : `light`
      } flex flex-col items-center justify-center lg:items-start pt-[30%] md:pt-40 pb-20 md:w-full lg:pb-40 `}
    >
      <div className="max-w-5xl p-4 z-20 lg:pl-[4rem] sticky top-32">
        <h1 className="font-black text-6xl px-4 py-4">
          FUSING TECH AND <br /> PASION
        </h1>
        <p className="font-light text-2xl leading-1 p-4">
          Hello again! My journey into software development began in 2018 when I
          volunteered to build a gaming community website. As I pieced together
          buttons, images, and text with HTML & CSS, I discovered my passion for
          coding. Since then, I&apos;ve had the privilege of working on diverse
          projects, from desktop and mobile applications to modern responsive
          websites, constantly fueling my enthusiasm for the digital realm.
          <br />
          <br /> With every line of code I write, I feel the thrill of crafting
          something tangible in the virtual world. The joy of seeing my
          creations come to life and the endless possibilities of technology
          keep me inspired.
          <br />
          <br />
          Fast-forward to today, I am always eagerly seeking new challenges,
          collaborative opportunities, and ways to make a meaningful impact in
          the software development domain.
        </p>
      </div>
    </div>
  );
}
