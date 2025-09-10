import { app } from "@/configs/app";

export const SITE_NAME = app.name;
export const SITE_DESCRIPTION =
  "Software Developer • Graphic Designer • Tech Enthusiast";
export const RESUME = {
  courses: [
    "Software development and programming",
    "Artificial intelligence and its applications",
    "Digital marketing",
    "Enhancing presentation and communication skills",
    "Team management and leadership",
  ],
  summary:
    "Software Developer and Computer Graphic Designer with " +
    (new Date().getFullYear() - 2017) +
    "+ years of experience in the creative and technology industry. Specialized in digital branding and magazine graphic design, with professional software development experience since 2017. Experience teaching software engineering and artificial intelligence, with proven ability to lead energetic teams and successfully complete international projects (including collaboration with the University of Virginia on the JBC journal design project). Also experienced in sales and support of digital products.",
  langs: ["Persian (Native)", "English", "Russian"],
  skills: [
    "Programming",
    "Technical Support",
    "User Requirements",
    "Teamwork",
    "Technical Training",
    "Customer Communication",
    "Project Management",
    "Technical Documentation",
    "Requirements Analysis",
    "Web Design",
    "Customer Technical Support",
    "Graphic Design",
  ],
};
export const CONTRIBUTIONS = {
  cover: {
    img: "/jbc-cover-art.jpg",
    alt: "JBC Cover Art",
    link: "https://www.jbc.org/issue/S0021-9258(25)X0004-1",
  },
};
export const PROJECTS = {
  shecan: {
    link: "https://raminsharifian.github.io/shecan",
    prerequisites: [
      "System running systemd (most modern Linux distributions)",
      "systemd-resolved service active and running",
      "Root/sudo privileges",
    ],
    contributing:
      "Feel free to submit issues and enhancement requests through the GitHub repository.",
  },
};
