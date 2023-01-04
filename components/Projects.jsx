import Image from "next/image";
import React from "react";
import comingSoon from "../public/assets/coming-soon.png";
import weatherApp from "../public/assets/project_images/Weather_App.png";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I have built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Weather App"
            backgroundImg={weatherApp}
            projectFramework='Next.Js'
            projectUrl="/weather"
          />
          <ProjectItem
            title="Project 2"
            backgroundImg={comingSoon}
            projectUrl="/project2"
          />
          <ProjectItem
            title="Project 3"
            backgroundImg={comingSoon}
            projectUrl="/project3"
          />
          <ProjectItem
            title="Project 4"
            backgroundImg={comingSoon}
            projectUrl="/project4"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
