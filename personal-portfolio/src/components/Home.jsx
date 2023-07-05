import React from "react";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import portrait from "../assets/portrait_cropped.png";

function Home(props) {
  const darkmode = props.darkmode;
  return (
    <div
      id="home"
      className={`${
        darkmode && "dark"
      } flex items-center justify-center pt-60 pb-20 lg:pb-60`}
    >
      {/* h-screen */}
      <div className="max-w-4xl p-4">
        {/* -translate-y-20 */}
        <h1 className="font-bold text-5xl px-4">
          Full Stack Software Developer 👋
        </h1>
        <p className="font-normal text-xl leading-loose p-4">
          Hey! I'm <b>Satanshu Mishra</b>. A passionate software developer
          specializing in designing & building exceptional digital solutions.
        </p>
        <a
          className="px-4 no-underline"
          href="https://drive.google.com/file/d/1c4uMZIbuM26bXfpeh9_IyBSeXmDe0mm7/view?usp=sharing"
          target="_blank"
        >
          <button
            className={`text-xl px-4 py-2 border-2 font-bold rounded-lg cursor-pointer duration-300 hover:duration-300 ${
              darkmode
                ? "border-white bg-black hover:border-white hover:bg-white hover:text-black"
                : "border-black bg-black text-white hover:border-black hover:bg-white hover:text-black"
            }`}
          >
            View Resume
          </button>
        </a>
        <div className="flex flex-row p-4">
          <a href="https://www.linkedin.com/in/satanshumishra/" target="_blank">
            <LinkedInLogoIcon className="h-10 w-10 pr-2" />
          </a>
          <a href="https://github.com/SatanshuMishra" target="_blank">
            <GitHubLogoIcon className="h-10 w-10 pr-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
