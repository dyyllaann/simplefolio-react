import React from "react";
import config from "../index.json";

const Hero = () => {
  const hero = config.hero;

  return (
    <section id="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Hi, my name is{" "}
          <span className="hero-name">{hero.name}</span>
          <br />
          {hero.subtitle}
        </h1>
        <div className="hero-cta">
          <a href="#about" className="cta-btn cta-btn--hero">
            <span>Know more</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;