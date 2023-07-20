/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import React from "react";
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

type TechStackProps = {
  darkMode: boolean;
};

export default function TechStack({ darkMode }: TechStackProps) {
  const darkmode = darkMode;

  return (
    <div
      className={`${
        darkmode ? "dark" : `light`
      } flex flex-col pl-[5rem] items-start overflow-hidden justify-center pt-40 pb-20 md:w-full lg:pb-60`}
    >
      <div className="max-w-5xl z-20">
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
      <div className="tech-stack w-full flex flex-nowrap py-8 z-20 overflow-x-scroll overflow-visible">
        <TechContainer
          technologyCategory="FRONT-END DEVELOPMENT"
          technologyData={frontEndTechnologies}
        />
        <TechContainer
          technologyCategory="BACK-END DEVELOPMENT"
          technologyData={backEndTechnologies}
        />
        <TechContainer
          technologyCategory="DATABASE MANAGEMENT"
          technologyData={databaseTechnologies}
        />
        <TechContainer
          technologyCategory="VERSION CONTROL"
          technologyData={versionControlTechnologies}
        />
        <TechContainer
          technologyCategory="DESIGN"
          technologyData={designTechnologies}
        />
        <TechContainer
          technologyCategory="OTHER TECHNOLOGIES"
          technologyData={otherTechnologies}
        />
        <TechContainer technologyCategory="IDE" technologyData={IDE} />
      </div>
    </div>
  );
}
