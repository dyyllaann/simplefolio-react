import React from "react";
import config from "../index.json";

const Hero = () => {
  const hero = config.hero;

  return (
    <section className="h-screen bg-white overflow-x-hidden">
      <div className="px-8 lg:px-32 flex flex-col justify-center align-between">
        <h1 className="text-6xl mt-64 font-bold tracking-wide">
          Hi, my name is  
          <span className="ml-3 whitespace-nowrap bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            {hero.name}
          </span>
        </h1>
        <h1 className="text-6xl font-bold tracking-wide mt-4">{hero.subtitle}</h1>
        <a href="#About" className="text-2xl font-bold p-0.5 mt-6 w-44 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
          <div className="bg-white">
            <span className="block text-center py-0.5 px-2 font-semibold bg-white font-bold bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
              Know more
            </span>
          </div>
        </a>
      </div>
      <div className="pt-32 overflow-hidden max-w-full inline-block">
        <ul className="flex flex-row justify-around absolute left-0 animate-marquee overflow-hidden max-w-full">
          {hero.icons.map ((item) => (
            <li key={item} className="mr-4">
              <i 
                className={`devicon-${item} colored`}
                style={{fontSize: "5rem"}}
              />
            </li>
          ))}
        </ul>
        {/* <ul className="flex flex-row justify-around absolute left-0 animate-marquee">
          {hero.icons.map ((item) => (
            <li key={item} className="mr-4">
              <i 
                className={`devicon-${item} colored`}
                style={{fontSize: "5rem"}}
              />
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  );
};

export default Hero;