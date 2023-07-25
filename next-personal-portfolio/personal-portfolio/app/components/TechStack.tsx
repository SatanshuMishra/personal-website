"use client";

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
  return (
    <div
      className={`${
        darkMode ? "dark" : `light`
      } flex flex-col lg:flex-row items-start lg:items-start justify-center pt-[30%] md:pt-40 pb-20 md:w-full lg:pb-40 `}
    >
      <div className="max-w-2xl lg:max-w-md xl:max-w-5xl p-4 z-20 lg:pl-[4rem] lg:sticky lg:top-32">
        <h1 className="font-black text-4xl md:text-4xl lg:text-6xl px-4 py-4">
          {/* DESIGN.
          <br />
          DEVELOP.
          <br />
          TEST. */}
          FROM <br /> PIXELS TO <br /> PRODUCTS
        </h1>
        <p className="font-light text-2xl xl:text-3xl leading-1 p-4">
          Building a good digital experience requires an even better tool-set of
          technologies. These are some of the technologies I have worked with.
          {/* recently. */}
        </p>
      </div>
      <div className="tech-stack w-full h-auto flex flex-col flex-nowrap items-center px-[2rem] md:px-[5rem] gap-8 py-8 z-20 overflow-visible overflow-y-scroll">
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
      </div>
    </div>
  );
}
