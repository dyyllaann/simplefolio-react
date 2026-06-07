import React from "react";
import config from "../index.json";
import Image from "next/image";

const Projects = () => {
  const projects = config.projects;

  return (
    <section id="projects" className="bg-surface text-on-surface px-8 md:px-32 py-20 pb-16">
      <h2 className="section-title dark-blue-text">{projects.title}</h2>
      <div>
        {projects.projects.map((item) => (
          <div key={item.title} className="mb-32 flex flex-col lg:flex-row items-start">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h3 className="font-bold mb-7 text-[2.5rem]">{item.title}</h3>
              <p>{item.description}</p>
              <div className="mt-10 flex gap-5 justify-center lg:justify-start">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-btn cta-btn--hero"
                >
                  <span>See Live</span>
                </a>
                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-btn cta-btn--hero"
                >
                  <span>Source Code</span>
                </a>
              </div>
            </div>
            <div className="w-11/12 mx-auto lg:ml-12 lg:flex-1 mt-12 lg:mt-0">
              <Image
                src={item.image}
                alt={item.title}
                className="thumbnail w-full"
                width={700}
                height={350}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;