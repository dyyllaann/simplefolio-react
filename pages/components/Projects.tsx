import React from "react";
import config from "../index.json";
import Image from "next/image";

const Projects = () => {
  const projects = config.projects;

  return (
    <section id="projects">
      <h2 className="section-title dark-blue-text">{projects.title}</h2>
      <div className="project-wrapper">
        {projects.projects.map((item) => (
          <div key={item.title} className="row">
            <div className="project-wrapper__text">
              <h3 className="project-wrapper__text-title">{item.title}</h3>
              <p>{item.description}</p>
              <div className="project-wrapper__buttons">
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
            <div className="project-wrapper__image">
              <Image
                src={item.image}
                alt={item.title}
                className="thumbnail"
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