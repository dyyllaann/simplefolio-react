import React from "react";
import config from "../index.json";

const Hero = () => {
  const hero = config.hero;

  return (
    <section id="hero" className="min-h-screen h-screen flex items-center overflow-x-hidden bg-surface">
      <div className="hero-container">
        <h1 className="hero-title font-bold load-hidden">
          Hi, my name is{" "}
          <span className="hero-name">{hero.name}</span>
          <br />
          {hero.subtitle}
        </h1>
        <div className="hero-cta mb-2 load-hidden">
          <a href="#about" className="cta-btn cta-btn--hero">
            <span>Know more</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;