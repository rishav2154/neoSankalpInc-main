import React from "react";
import { projects } from "../../components/Project";
import { assets } from "../../assets/assets";

const Work = () => {
  ``;
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {projects.map((project, index) => (
        <article
          key={index}
          className="relative overflow-hidden w-full max-w-[440px] group"
        >
          <img
            src={assets[project.image]}
            alt={project.title}
            className="w-full rounded-2xl border border-gray-600"
          />
          <div className="absolute bottom-8 left-[-150%] right-0 w-[90%] bg-gray-900 text-white p-6 max-sm:px-2 max-sm:py-3 shadow-lg rounded-r-lg transition-all duration-500 group-hover:left-0">
            <h2 className="text-2xl max-sm:text-xl font-oswald text-secondary font-semibold mb-3">
              {project.title}
            </h2>
            <p className="text-xs mb-1 block">{project.description}</p>
            <div className="flex items-center gap-8">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm max-sm:text-xs font-medium text-slate-300 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Work;
