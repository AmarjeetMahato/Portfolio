import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import GoodPlay from "@/public/GoodPlay.png";
import localKaam from "@/public/localkaam.png";
import springsecurity from "@/public/springsecurity.jpg"


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Jamshedpur,Jharkhand",
    description:
   " I completed my B.Tech  in 2021 and have been deeply passionate about software development ever since.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Frontend Developer (Freelance)",
    location: "Remote",
    description:
      "Since 2022, I have been working as a freelance Frontend developer, delivering scalable and high-performance applications. I specialize in designing  building seamless front-end experiences using modern frameworks.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Bangalore, India",
    description:
      "Currently working as a Full-Stack Developer in 2024, specializing in the MERN stack. My expertise includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I focus on building scalable, high-performance applications and am always exploring new technologies to enhance my skills.",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  },
  
] as const;

export const projectsData = [
  {
    title: "Gaming Platform",
    description:
      "Designed and built user-friendly interfaces using modern frameworks and tools, focusing on responsiveness and accessibility.",
    tags: ["React", "Redux Toolkit", "CSS", "HTML", "React Query"],
    imageUrl: GoodPlay,
    link: "https://www.goodplay.in", // Add actual URL here
  },
  {
    title: "Human Power Service Platform",
    description:
      "Implemented Redux for efficient state management, ensuring seamless data flow and consistent user experience across the platform",
    tags: ["React", "Javascript", "CSS", "Redux Toolkit","React Query"],
    imageUrl: localKaam,
    link: "https://dev.localkam.com", // Add actual URL here
  },

  {
    title: "2FactorAuthentication",
    description:
      "A secure web application implementing 2-factor authentication (2FA) using Spring Security.",
    tags: ["Spring Boot", "Java", "Postgres", "Hibernate", "Spring Security"],
    imageUrl: springsecurity,
    link: "https://github.com/AmarjeetMahato/2factorSpringAuth", // Add actual URL here
  }

 
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Java",
  "OOPS",
  "Spring Boot",
  "Hibernate",
  "PostgreSQL",
  "MySql",
  "Framer Motion",
] as const;
