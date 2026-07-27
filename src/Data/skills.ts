import {
  SiReact,
  SiTypescript,
  SiPython,
  SiFastapi,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNextdotjs,
  SiDocker,
  SiPandas,
  SiMui,
  SiBootstrap,
  SiNumpy,
  SiGit,
  SiGitlab,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { SkillProps } from "../Types/Skills";

export const frontendSkills: SkillProps[] = [
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF", // White works best on your dark background
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: SiCss,
    color: "#1572B6",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Material UI",
    icon: SiMui,
    color: "#007FFF",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "#7952B3",
  },
];

export const backendSkills: SkillProps[] = [
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "Java",
    icon: FaJava,
    color: "#007396",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    color: "#009688",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
  },
];

export const toolSkills: SkillProps[] = [
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "GitLab",
    icon: SiGitlab,
    color: "#FC6D26",
  },
  {
    name: "Pandas",
    icon: SiPandas,
    color: "#150458",
  },
  {
    name: "NumPy",
    icon: SiNumpy,
    color: "#013243",
  },
];
