import React from "react";
import aboutGif from "../assets/aboutme.gif";

function About(props) {
  const darkmode = props.darkmode;
  return (
    <div
      id="about"
      className={`${
        darkmode && "dark"
      } flex flex-wrap items-center justify-center pt-40 pb-20 lg:pb-60`}
    >
      {/* <img src={aboutGif} className="max-w-lg hidden lg:block" /> */}
      <div className="max-w-4xl p-4">
        <h1
          className={`font-black text-xl px-4 py-2 my-4 w-fit ${
            darkmode ? `bg-blue-600 text-white` : `  bg-black text-white`
          }`}
        >
          ABOUT ME
        </h1>
        <p className="text-xl leading-loose my-4">
          I'm a full stack developer who has been building industry utilized
          applications since my senior year in highschool. Since then, I've
          graduated and pursured a higher-education in the field of Computer
          Science while competing in Hackathons and furthering my skills through
          Udemy courses.
        </p>
      </div>
    </div>
  );
}

export default About;
