import React from "react";
import config from "../index.json";

const Hero = () => {
  const hero = config.hero;

  return (
    <section id="hero" className="jumbotron min-h-screen h-screen flex items-center overflow-x-hidden bg-surface">
      <div className="container hero-container">
        <h1 className="hero-title font-bold load-hidden">
          Hi, my name is{" "}
          <span className="hero-name text-color-main">{hero.name}</span>
          <br />
          {hero.subtitle}
        </h1>
        <div className="hero-cta load-hidden">
          <a href="#about" className="cta-btn cta-btn--hero">
            <span>Know more</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;