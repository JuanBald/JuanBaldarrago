import SciTec from "../assets/scitecinc_logo.jpeg";
import CCM from "../assets/CCM-logo.jpg";
import InshoreTechnologies from "../assets/Inshore logo.jpeg";
import type { WorkProps } from "../Types/Work";

export const jobs: WorkProps[] = [
  {
    title: "SciTec",
    description: [
      "Developed and enhanced features for an internal web application using React, Next.js, TypeScript, Python, and FastAPI, delivering scalable solutions that improved internal business workflows.",
      "Designed and implemented a department-specific web page using React, Material UI, and REST APIs, streamlining daily operations and improving efficiency for internal users.",
      "Collaborated in an Agile development environment by participating in daily stand-ups, weekly sprints, and code reviews while creating test cases to validate new features and maintain application quality.",
    ],
    position: "Software Engineer Intern",
    logo: `${SciTec}`,
    duration: "May 2026-August 2026",
  },
  {
    title: "InShore Technologies",
    description: [
      "Set up and relocated computer workstations and camera systems, including monitors, desktops, keyboards, mice, and speakers, ensuring proper configuration and functionality for end-users.",
      "Configured laptops and joined devices to the appropriate domain, enabling secure access to network resources and user profiles.",
      "Prepared computers for deployment in school environments by performing system reboots, cleaning, and secure data wiping procedures.",
      "Diagnosed and repaired hardware issues on desktops and laptops, including screen replacements, battery replacements, motherboard repairs, keyboard fixes, and component-level troubleshooting.",
    ],
    position: "IT Intern",
    logo: `${InshoreTechnologies}`,
    duration: "June 2025-August 2025",
  },
  {
    title: "County College of Morris",
    description: [
      "Troubleshot a variety of devices including printers, phone systems, Raspberry Pi units, and other hardware devices provided by the institute.",
      "Assisted students and staff with connecting to campus Wi-Fi, printers, routers, and other networked devices.",
      "Diagnosed and resolved hardware, software, and connectivity issues to ensure a seamless user experience.",
      "Maintained a professional and efficient approach to problem-solving while supporting students, faculty, and staff.",
      "Developed and deployed Python automation scripts to streamline IT Help Desk tasks, improving efficiency through service request tracking, support activity logging, and workflow automation.",
    ],
    position: "IT Student Help Desk",
    logo: `${CCM}`,
    duration: "September 2024-June 2025",
  },
];
