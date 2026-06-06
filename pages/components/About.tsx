import React from "react";
import config from "../index.json";
import Image from "next/image";

const About = () => {
  const about = config.about;

  return (
    <section id="about">
      <h2 className="section-title section-title--about">{about.title}</h2>
      <div className="about-wrapper">
        <div className="about-wrapper__image">
          <Image
            src={about.image}
            alt="Profile picture"
            width={300}
            height={300}
          />
        </div>
        <div className="about-wrapper__info">
          <p className="about-wrapper__info-text">{about.primary}</p>
          <p className="about-wrapper__info-text">{about.secondary}</p>
          <div className="about-wrapper__resume">
            <a href="#" className="cta-btn cta-btn--resume">
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;