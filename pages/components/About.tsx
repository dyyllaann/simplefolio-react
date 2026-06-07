import React from "react";
import config from "../index.json";
import Image from "next/image";

const About = () => {
  const about = config.about;

  return (
    <section id="about" className="px-8 md:px-32 py-20 pb-32 text-white">
      <h2 className="section-title section-title--about">{about.title}</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src={about.image}
            alt="Profile picture"
            className="max-w-[300px] w-full rounded-lg shadow-lg"
            width={300}
            height={300}
          />
        </div>
        <div className="pt-8 md:pt-0 md:w-1/2 md:ml-4 text-center md:text-left flex flex-col justify-center">
          <p>{about.primary}</p>
          <p className="mt-6">{about.secondary}</p>
          <div className="mt-6">
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