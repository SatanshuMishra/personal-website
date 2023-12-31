import React, { useRef } from "react";
import FeaturedProject from "./FeaturedProject";
import { projectOne, projectTwo, projectThree } from "./featuredProjects";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectsProps = {
  darkMode: boolean;
};

export default function Projects({ darkMode }: ProjectsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0.6, 0.68], [1, 0]);

  return (
    <div
      id="projects"
      ref={ref}
      className={`${
        darkMode ? "dark" : `light`
      } flex flex-col items-start justify-center pt-[30%] md:pt-40 pb-20 md:w-full lg:pb-40`}
    >
      <motion.div
        style={{ opacity: opacity }}
        className="max-w-5xl p-4 z-20 lg:pl-[4rem] lg:my-[15rem] lg:sticky lg:top-20"
      >
        <h1 className="font-black text-5xl lg:text-6xl px-4 py-4">
          SOME THINGS <br /> I&apos;VE BUILT
        </h1>
        <p className="font-light text-2xl lg:text-3xl leading-1 p-4">
          Here’s is a sampling of some of the things I have built.
        </p>
      </motion.div>
      <div className="tech-stack w-full flex flex-col flex-nowrap px-[2rem] lg:px-[5rem] py-8 z-20">
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
