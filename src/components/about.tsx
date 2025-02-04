
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.div
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
  >
    <SectionHeading>About Me</SectionHeading>
    <p className="mb-3">
      I hold a <span className="font-medium">B.Tech degree</span> and have a strong passion for software development.  
      My journey started with backend development, and over time, I have built expertise in both{" "}
      <span className="font-medium">MERN stack</span> and{" "}
      <span className="font-medium">Java with Spring Boot</span>.  
      I love designing scalable APIs, working with databases, and optimizing backend performance.
    </p>
  
    <p className="mb-3">
      What excites me the most about programming is{" "}
      <span className="italic">solving real-world problems through code</span>.  
      I enjoy writing clean, efficient, and maintainable code while constantly learning new technologies.  
      Currently, I am deepening my knowledge in **microservices architecture** and **AI integration with backend systems**.
    </p>
  
    <p>
      <span className="italic">Beyond coding</span>, I enjoy exploring new tech trends, reading about system design, and contributing to open-source projects.  
      In my free time, I like watching tech talks, learning new programming paradigms, and experimenting with{" "}
      <span className="font-medium">AI-driven backend solutions</span>.
    </p>
  </motion.div>
  
  );
}
