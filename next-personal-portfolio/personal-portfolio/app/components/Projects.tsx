import React from "react";
import FeaturedProject from "./FeaturedProject";
import { projectOne, projectTwo, projectThree } from "./featuredProjects";

type ProjectsProps = {
  darkMode: boolean;
};

export default function Projects({ darkMode }: ProjectsProps) {
  return (
    <div
      className={`${
        darkMode ? "dark" : `light`
      } flex flex-col items-center justify-center lg:items-start pt-[30%] md:pt-40 pb-20 md:w-full lg:pb-40`}
    >
      <div className="max-w-5xl p-4 z-20 lg:pl-[4rem]">
        <h1 className="font-black text-6xl px-4 py-4">
          SOME THINGS <br /> I&apos;VE BUILT
        </h1>
        <p className="font-light text-2xl leading-1 p-4">
          Here’s is a sampling of some of the things I have built.
        </p>
      </div>
      <div className="tech-stack w-full flex flex-col flex-nowrap px-[2rem] md:px-[5rem] py-8 z-20">
        <FeaturedProject
          darkMode={darkMode}
          alignmentRight={true}
          imageUrl={projectOne.imageUrl}
          title={projectOne.title}
          description={projectOne.description}
          technologies={projectOne.technologies}
          github={projectOne.github}
          link={projectOne.link}
        />
        <FeaturedProject
          darkMode={darkMode}
          alignmentRight={false}
          imageUrl={projectTwo.imageUrl}
          title={projectTwo.title}
          description={projectTwo.description}
          technologies={projectTwo.technologies}
          github={projectTwo.github}
          link={projectTwo.link}
        />
        <FeaturedProject
          darkMode={darkMode}
          alignmentRight={true}
          imageUrl={projectThree.imageUrl}
          title={projectThree.title}
          description={projectThree.description}
          technologies={projectThree.technologies}
          github={projectThree.github}
          link={projectThree.link}
        />
      </div>
    </div>
  );
}
