"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Developed by using NextJS,TailwindCSS and Farmer motion Library",
    image: "/images/1.png",
    tag: ["All", "Web"],
   
  },
  {
    id: 2,
    title: "MERN Stack Template",
    description: "Poster Design",
    image: "/images/2.png",
    tag: ["All", "Canva"],
   
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Developed by using Bootstap and MERN",
    image: "/images/3.png",
    tag: ["All", "Web"],
   
  },
  {
    id: 4,
    title: "MERN Stack Template",
    description: "Poster Design",
    image: "/images/4.png",
    tag: ["All", "Canva"],
   
  },
  {
    id: 5,
    title: "Microsoft Office Template",
    description: "Poster Design ",
    image: "/images/5.png",
    tag: ["All", "Canva"],
   
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "React Project by using Material UI",
    image: "/images/6.png",
    tag: ["All", "Web"],
   
  },
];

export default function Projects() {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div  className="min-h-screen p-8 pt-16 text-white bg-gray-800">
    <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Canva"
          isSelected={tag === "Canva"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
             
            />
          </motion.li>
        ))}
      </ul>
    
 

    </div>
  );
}
