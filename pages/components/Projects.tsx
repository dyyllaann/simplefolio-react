import React from "react";
import config from "../index.json";
import Image from "next/image";

const Projects = () => {
  const projects = config.projects;

  return (
    <section id="projects" className="bg-surface text-on-surface">
      <div className="container projects-container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text load-hidden">{projects.title}</h2>
          {projects.projects.map((item) => (
            <div key={item.title} className="row project-row">
              <div className="col-lg-4 col-sm-12 lg:w-1/3">
                <div className="project-wrapper__text text-center lg:text-left load-hidden">
                  <h3 className="project-wrapper__text-title font-bold mb-7 text-[2.5rem]">{item.title}</h3>
                  <p className="mb-4">{item.description}</p>
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
                      className="cta-btn text-color-main"
                    >
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-sm-12 lg:flex-1">
                <div className="project-wrapper__image w-11/12 mx-auto lg:ml-12 mt-12 lg:mt-0 load-hidden">
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="img-fluid thumbnail w-full"
                      width={700}
                      height={350}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;