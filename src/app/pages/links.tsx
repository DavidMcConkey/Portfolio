import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBookmark
} from "react-icons/fa";

const pdfUrl = ''

export const links = [
  {
    index: 0,
    title: "Find me on Github",
    href: "https://github.com/DavidMcConkey",
    icon: <FaGithub />,
  },
  {
    index: 1,
    title: "Find me on LinkedIn",
    href: "https://www.linkedin.com/in/david-mcconkey/",
    icon: <FaLinkedin />,
  },
  {
    index: 2,
    title: "Contact me via email",
    href: "mailto:davidmcconkey@outlook.com",
    icon: <FaEnvelope />,
  },
  // {
  //   index: 3,
  //   title: "Check out my Resume",
  //   href: "mailto:davidmcconkey@outlook.com",
  //   icon: <FaBookmark />,
  // },
];
