import React from "react";
import config from "../index.json";
import Image from "next/image";

const Projects = () => {
  const projects = config.projects;

  return (
    <section id="projects" className="bg-surface text-on-surface">
      <div className="site-container">
        <div>
          <h2 className="section-title text-color-accent load-hidden">{projects.title}</h2>
          {projects.projects.map((item) => (
            <div key={item.title} className="mb-32 flex flex-col items-start gap-12 lg:grid lg:grid-cols-[3fr_7fr]">
              <div className="w-full">
                <div className="project-wrapper__text text-center lg:text-left load-hidden">
                  <h3 className="project-wrapper__text-title font-bold mb-7 text-[2.5rem]">{item.title}</h3>
                  <p className="project-description mb-4">{item.description}</p>
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
              <div className="w-full">
                <div className="project-wrapper__image mx-auto w-full load-hidden">
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="thumbnail"
                      width={775}
                      height={388}
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