import p1S from "../assets/project-screenshots/discussIt.png";
import p3S from "../assets/project-screenshots/personalPortfolio.png";
import p1SN from "../assets/project-screenshots/discussIt-PosterA.png";
import p2S from "../assets/project-screenshots/maptyDo-Poster.png";

export const projectOne = {
  imageUrl: p1SN,
  title: "discussIt",
  description:
    "An unique take on a discussion website combining features from both social-media applications and forum based websites. Start or join discussions focused on specific themes, or just explore the most popular discussions, and more.",
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MySQL",
    "Docker",
    "Nginx",
  ],
  github: "https://github.com/SatanshuMishra/discussIt",
  link: false,
};

export const projectTwo = {
  imageUrl: p2S,
  title: "maptyDo",
  description: `What do you get when you combine a map and a productivity app? Well, in this case, maptyDo 👀. maptyDo allows you to use both time and geography to plan & organise our day. Oh, and don't worry about looking up the weather forcast because maptyDo gets you the current weather forcasts for each of your task locations 🙂.`,
  technologies: ["HTML", "CSS", "JavaScript", "Github Pages"],
  github: "https://github.com/SatanshuMishra/maptyDo",
  link: "https://satanshumishra.github.io/maptyDo/",
};

export const projectThree = {
  imageUrl: p3S,
  title: "Personal Portfolio",
  description:
    "Not much to say here. This website helped me practice my TypeScript and Animations.",
  technologies: [
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Font Awesome",
    "Formik",
    "Yup",
  ],
  github: "https://github.com/SatanshuMishra/personal-website",
  link: "https://satanshu-mishra.vercel.app/",
};
