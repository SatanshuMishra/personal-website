import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type TechContainerProps = {
  darkMode: boolean;
  technologyCategory: string;
  technologyData: string[];
};

export default function TechContainer({
  darkMode,
  technologyCategory,
  technologyData,
}: TechContainerProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, zIndex: 50 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="flex-auto h-auto lg:max-w-lg sm:min-w-[25rem]"
    >
      <div className="relative group">
        <div
          className={`absolute -inset-1 bg-gradient-to-r ${
            darkMode ? `from-blue-600 to-blue-600` : `from-blue-600 to-blue-400`
          }  rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}
        ></div>
        <div
          className={`relative px-7 py-6 ${
            darkMode ? `bg-newDark` : `bg-white`
          } rounded-lg flex flex-col justify-start`}
        >
          <h4 className="text-xl font-bold py-1">{technologyCategory}</h4>
          <div className="flex flex-row justify-start flex-wrap py-1">
            {technologyData.map((tech, _) => {
              return (
                <Image
                  key={_}
                  className="p-1 rounded-md pointer-events-none h-10 w-auto"
                  src={tech}
                  alt="_"
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
