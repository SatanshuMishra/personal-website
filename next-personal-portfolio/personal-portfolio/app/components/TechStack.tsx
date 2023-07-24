"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import TechContainer from "./TechContainer";
import {
  frontEndTechnologies,
  backEndTechnologies,
  versionControlTechnologies,
  designTechnologies,
  IDE,
  serverTechnologies,
  otherTechnologies,
  databaseTechnologies,
} from "./Technologies";
import { motion } from "framer-motion";

type TechStackProps = {
  darkMode: boolean;
};

export default function TechStack({ darkMode }: TechStackProps) {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    console.log(carousel.current);
  }, []);

  return (
    <div
      className={`${
        darkMode ? "dark" : `light`
      } flex flex-col items-center justify-center lg:items-start pt-[30%] md:pt-40 pb-20 md:w-full lg:h-screen lg:pb-40 `}
    >
      <div className="max-w-5xl p-4 z-20 lg:pl-[4rem]">
        <h1 className="font-black text-6xl px-4 py-4">
          DESIGN.
          <br />
          DEVELOP.
          <br />
          TEST.
        </h1>
        <p className="font-light text-2xl leading-1 p-4">
          Building a good digital experience requires an even better tool-set of
          technologies. These are some of the technologies I have worked with
          recently.
        </p>
      </div>
      <motion.div
        drag="x"
        ref={carousel}
        dragConstraints={{ right: 0, left: -1643.29 }}
        className="tech-stack w-full flex flex-nowrap px-[2rem] md:px-[5rem] gap-8 py-8 z-20 overflow-x-visible md:overflow-x-scroll"
      >
        <TechContainer
          darkMode={darkMode}
          technologyCategory="FRONT-END DEVELOPMENT"
          technologyData={frontEndTechnologies}
        />
        <TechContainer
          darkMode={darkMode}
          technologyCategory="BACK-END DEVELOPMENT"
          technologyData={backEndTechnologies}
        />
        <TechContainer
          darkMode={darkMode}
          technologyCategory="DATABASE MANAGEMENT"
          technologyData={databaseTechnologies}
        />
        <TechContainer
          darkMode={darkMode}
          technologyCategory="SERVERS"
          technologyData={serverTechnologies}
        />
        <TechContainer
          darkMode={darkMode}
          technologyCategory="VERSION CONTROL"
          technologyData={versionControlTechnologies}
        />
        <TechContainer
          darkMode={darkMode}
          technologyCategory="DESIGN"
          technologyData={designTechnologies}
        />
        <TechContainer
          darkMode={darkMode}
          technologyCategory="IDE"
          technologyData={IDE}
        />
        <TechContainer
          darkMode={darkMode}
          technologyCategory="OTHER TECHNOLOGIES"
          technologyData={otherTechnologies}
        />
      </motion.div>
    </div>
  );
}
