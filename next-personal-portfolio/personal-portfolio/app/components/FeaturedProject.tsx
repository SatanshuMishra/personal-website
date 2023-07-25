import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type Props = {
  darkMode: boolean;
  alignmentRight: boolean;
  imageUrl: any;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  link?: string | boolean;
};

function FeaturedProject({
  darkMode,
  alignmentRight,
  imageUrl,
  title,
  description,
  technologies,
  github,
  link,
}: Props) {
  const [isHovering, setIsHovering] = useState(true);

  return (
    <>
      <div className="hidden lg:inline-block my-16 w-full h-full">
        <div
          className={`relative w-full h-full flex flex-col justify-center ${
            alignmentRight ? `lg:items-start` : `lg:items-end`
          } items-center`}
        >
          <Image
            className={`w-[100%] my-10 lg:my-0 lg:w-[60%] h-auto ${
              isHovering ? `` : `lg:filter lg:blur-[2px]`
            } contrast-100 saturate-200 transition-all`}
            src={imageUrl}
            alt="screenshot"
          />
          <motion.div
            onHoverStart={(e) => {
              setIsHovering(true);
            }}
            onHoverEnd={(e) => {
              setIsHovering(false);
            }}
            className={`h-full md:top-[50%] lg:top-0 md:absolute inset-0 flex flex-col justify-center ${
              alignmentRight ? `items-end` : `items-start`
            } z-10`}
          >
            <h5 className="font-black text-lg text-blue-400">
              FEATURED PROJECT
            </h5>
            <h2 className={`font-black text-5xl ${darkMode ? "" : ""}`}>
              {title}
            </h2>
            <div
              className={`my-5 ${
                darkMode ? `bg-deep__blue` : `bg-light__mode__blue`
              } text-white rounded-md md:max-w-2xl p-6 text-lg leading-relaxed font-normal`}
            >
              {description}
            </div>
            <div className="flex justify-end flex-wrap">
              {technologies.map((technology, _) => {
                return (
                  <p
                    key={_}
                    className={`bg-technology__bubble  bg-opacity-20 text-lg m-1 px-2 py-1 rounded-lg ${
                      darkMode ? `text-gray-300` : `text-gray-800`
                    }`}
                  >
                    {technology}
                  </p>
                );
              })}
            </div>
            <div className="w-full flex justify-center text-3xl">
              <a href={`${github}`}>
                <FontAwesomeIcon
                  className="py-4 px-2 cursor-pointer hover:text-cyan-400"
                  icon={faGithub}
                />
              </a>
              {link && (
                <a href="">
                  <FontAwesomeIcon
                    className="py-4 px-2 cursor-pointer hover:text-cyan-400"
                    icon={faUpRightFromSquare}
                  />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="lg:hidden relative small-viewport-project my-5 w-full h-fit flex flex-col justify-center items-center overflow-hidden border-2 border-blue-600">
        <Image
          className={` w-full h-[650px] xs:h-[540px] sm:h-[480px] object-cover scale-110 filter blur-[3px] opacity-40`}
          src={imageUrl}
          alt="screenshot"
        />
        <div className="absolute h-full w-[90%] flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-start">
            <h5
              className={`font-black text-lg ${
                darkMode ? `text-blue-400` : `text-blue-600`
              }`}
            >
              FEATURED PROJECT
            </h5>
            <h2 className={`font-black text-4xl`}>{title}</h2>
          </div>
          <div
            className={`my-5 ${
              darkMode ? `text-white` : `text-black`
            } rounded-md lg:max-w-2xl text-lg leading-relaxed font-normal`}
          >
            {description}
          </div>
          <div className="w-full flex justify-start flex-wrap">
            {technologies.map((technology, _) => {
              return (
                <p
                  key={_}
                  className={`bg-technology__bubble font-medium ${
                    darkMode ? `bg-opacity-20` : `bg-opacity-40`
                  }   text-lg m-1 px-2 py-1 rounded-lg ${
                    darkMode ? `text-gray-300` : `text-gray-800`
                  }`}
                >
                  {technology}
                </p>
              );
            })}
          </div>
          <div className="w-full flex justify-center text-3xl">
            <a href={`${github}`}>
              <FontAwesomeIcon
                className="py-4 px-2 cursor-pointer hover:text-cyan-400"
                icon={faGithub}
              />
            </a>
            {link && (
              <a href="">
                <FontAwesomeIcon
                  className="py-4 px-2 cursor-pointer hover:text-cyan-400"
                  icon={faUpRightFromSquare}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProject;
