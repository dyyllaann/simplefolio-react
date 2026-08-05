import React from "react";
import config from "../index.json";
import Image from "next/image";

const About = () => {
  const about = config.about;

  return (
    <section id="about" className="text-white">
      <div className="container about-container">
        <h2 className="section-title section-title--about load-hidden">{about.title}</h2>
        <div className="about-wrapper row about-row">
          <div className="col-md-6 col-sm-12 md:w-1/2">
            <div className="about-wrapper__image flex justify-center items-center load-hidden">
              <Image
                src={about.image}
                alt="Profile picture"
                className="img-fluid max-w-[300px] w-full rounded-lg shadow-lg"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 md:w-1/2">
            <div className="about-wrapper__info pt-8 md:pt-0 md:ml-4 text-center md:text-left flex flex-col justify-center load-hidden">
              <p className="about-wrapper__info-text">{about.primary}</p>
              <p className="about-wrapper__info-text mt-6">{about.secondary}</p>
              <span className="d-flex mt-6">
                <a href="#" className="cta-btn cta-btn--resume">
                  View Resume
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;