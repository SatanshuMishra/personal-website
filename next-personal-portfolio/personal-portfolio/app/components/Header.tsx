"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

// import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import portrait from "../assets/portrait_cropped.png";
import Reveal from "./animationComponents/Reveal";

type HeaderProps = {
	darkMode: boolean;
};

export default function Header({ darkMode }: HeaderProps) {
	const darkmode = darkMode;
	const iconSize = `7`;

	const [isHoverLinkedIn, setIsHoverLinkedIn] = useState(false);
	const [isHoverGitHub, setIsHoverGitHub] = useState(false);

	const handleHoverLinkedIn = () => {
		setIsHoverLinkedIn(!isHoverLinkedIn);
	};

	const handleHoverGitHub = () => {
		setIsHoverGitHub(!isHoverGitHub);
	};

	return (
		<div
			id="home"
			className={`${darkmode ? "dark" : `light`
				} flex flex-col items-center justify-center lg:pl-[4rem] lg:items-start pt-[30%] md:pt-40 pb-20 md:w-full lg:pb-40 lg:h-screen`}
		>
			{/* h-screen */}
			<div className="max-w-5xl p-4 z-20">
				{/* -translate-y-20 */}
				{/* <Reveal> */}
				<h1 className="font-black text-5xl lg:text-6xl px-4 py-4">
					Full Stack Software <br /> Developer 👋
				</h1>
				{/* </Reveal> */}
				{/* <Reveal> */}
				<div className="px-4 flex flex-row justify-start items-center">
					<FontAwesomeIcon
						icon={faQuoteLeft}
						className="text-5xl lg:text-6xl"
					/>
					<h3 className="font-semibold text-2xl lg:text-3xl px-4 pt-4 pb-2">
						The future is what we make it. So make it a good one.
					</h3>
				</div>
				{/* </Reveal> */}
				{/* <Reveal> */}
				<p className="font-light text-2xl lg:text-3xl leading-1 p-4">
					Programming is not a hobby, it&apos;s a dream. I create clean, and
					accessible solutions for complex modern-day challenges.
				</p>
				{/* </Reveal> */}
				{/* <Reveal> */}
				<a
					className="px-4 no-underline"
					href="https://drive.google.com/file/d/1qJ04RPb2j0wSLTIFT-45S6vt3lj4rPMc/view?usp=sharing"
					target="_blank"
				>
					<button
						className={`text-xl px-4 py-2 border-2 font-bold rounded-lg cursor-pointer duration-300 hover:duration-300 ${darkmode
							? "border-white bg-transparent hover:border-white hover:bg-white hover:text-black"
							: "border-newDark bg-newDark text-white hover:border-newDark hover:bg-white hover:text-black"
							}`}
					>
						View Resume
					</button>
				</a>
				{/* </Reveal> */}
				{/* <Reveal> */}
				<div className="flex flex-row p-4">
					<a href="https://www.linkedin.com/in/satanshumishra/" target="_blank">
						<FontAwesomeIcon
							icon={faLinkedinIn}
							className={`${isHoverLinkedIn && `fa-bounce`
								} h-${iconSize} w-${iconSize} py-2 pr-2 text-3xl`}
							onMouseEnter={handleHoverLinkedIn}
							onMouseLeave={handleHoverLinkedIn}
						/>
					</a>
					<a href="https://github.com/SatanshuMishra" target="_blank">
						<FontAwesomeIcon
							icon={faGithubAlt}
							className={`${isHoverGitHub && `fa-bounce`
								} h-${iconSize} w-${iconSize} py-2 px-2 text-3xl`}
							onMouseEnter={handleHoverGitHub}
							onMouseLeave={handleHoverGitHub}
						/>
					</a>
				</div>
				{/* </Reveal> */}
			</div>
		</div>
	);
}
