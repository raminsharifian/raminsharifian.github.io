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
    "+ years of experience in the creative and technology industry. Specialized in digital branding and magazine graphic design, with professional software development experience since 2019. Experience teaching software engineering and artificial intelligence, with proven ability to lead energetic teams and successfully complete international projects (including collaboration with the University of Virginia on the JBC journal design project). Also experienced in sales and support of digital products.",
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
  title: "Contributions",
  about:
    "Cover art for the Journal of Biological Chemistry (JBC) visualizing antibiotic-resistant pathogens:",
  date: "April 2025 | Volume 301, Issue 4 | Open Access",
  link: "https://www.jbc.org/issue/S0021-9258(25)X0004-1",
  blockquote:
    "This 3D visualization helps biochemists better understand the structure of antibiotic-resistant bacteria, contributing to scientific communication in the field of biochemical science.",
  description:
    "On the Cover: Depicted are the outer and inner membranes of the common antibiotic resistant pathogen P. aeruginosa. (Out of focus P. aeruginosa (brown) is featured in the background). AlphaFold predictions decorate the two membranes. In green is the outer membrane lipoprotein YaiW...",
};
export const PROJECTS = {
  title: "Projects",
  shecan: {
    about:
      "Shecan DNS Config for Linux (One-command setup for better internet access). A Bash script to configure systemd-resolved to use Shecan DNS servers on systemd-based Linux systems...",
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
