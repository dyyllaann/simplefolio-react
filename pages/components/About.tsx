import React from "react";
import config from "../index.json";
import Image from "next/image";

const About = () => {
  const about = config.about;

  return (
    <section id="about" className="text-on-primary">
      <div className="site-container">
        <h2 className="section-title load-hidden">{about.title}</h2>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="about-wrapper__image flex justify-center items-center load-hidden">
              <Image
                src={about.image}
                alt="Profile picture"
                className="w-full max-w-[300px] rounded-lg shadow-lg"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="about-wrapper__info pt-8 md:pt-0 md:ml-4 text-center md:text-left flex flex-col justify-center load-hidden">
              <p>{about.primary}</p>
              <p className="mt-6">{about.secondary}</p>
              <div className="mt-6">
                <a href="#" className="cta-btn cta-btn--resume">
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;