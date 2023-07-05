import React from "react";
import HTMLBadge from "../assets/HTML_Badge.png";
import CSSBadge from "../assets/CSS_Badge.png";
import TailwindBadge from "../assets/Tailwind_Badge.png";
import ReactBadge from "../assets/React_Badge.png";
import PythonBadge from "../assets/Python_Badge.png";
import JSBadge from "../assets/JS_Badge.png";
import JavaBadge from "../assets/Java_Badge.png";
import PHPBadge from "../assets/PHP_Badge.png";
import BootstrapBadge from "../assets/Bootstrap_Badge.png";
import FigmaBadge from "../assets/Figma_Badge.png";
import NPMBadge from "../assets/NPM_Badge.png";
import NodeJSBadge from "../assets/Node_Badge.png";
import PostgreSQLBadge from "../assets/PostgreSQL_Badge.png";
import MySQLBadge from "../assets/MySQL_Badge.png";
import MongoDBBadge from "../assets/MongoDB_Badge.png";
import GitHubBadge from "../assets/GitHub_Badge.png";
import GitBadge from "../assets/Git_Badge.png";
import NginxBadge from "../assets/Nginx_Badge.png";
import DockerBadge from "../assets/Docker_Badge.png";

const TechStack = (props) => {
  const darkmode = props.darkmode;
  const tools = [
    HTMLBadge,
    CSSBadge,
    BootstrapBadge,
    JSBadge,
    ReactBadge,
    TailwindBadge,
    PythonBadge,
    JavaBadge,
    PHPBadge,
    FigmaBadge,
    NPMBadge,
    NodeJSBadge,
    MySQLBadge,
    PostgreSQLBadge,
    MongoDBBadge,
    GitBadge,
    GitHubBadge,
    DockerBadge,
    NginxBadge,
  ];
  return (
    <div
      className={`${
        darkmode && "dark"
      } flex items-center justify-center pt-40 pb-20 md:w-full lg:pb-60`}
    >
      <div className="flex flex-col items-start-start max-w-4xl p-4 lg:p-0">
        <h1
          className={`font-black text-xl px-4 py-2 my-4 w-fit ${
            darkmode ? `bg-white text-black` : `  bg-black text-white`
          }`}
        >
          TOOLS
        </h1>
        <p className="text-base">
          These are the technologies that I have worked with.
        </p>
        <div className="flex flex-row flex-wrap justify-evenly md:justify-start items-center mt-4">
          {tools.map((tool) => {
            return <img className="w-40 p-4" src={tool} alt="" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
