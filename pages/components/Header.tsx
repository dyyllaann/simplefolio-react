import React from "react";
import config from "../index.json";

const Header = () => {
  const navigation = config.navigation;

  return (
    <section id="header" className="p-0 text-on-primary" style={{ display: "none" }}>
      <nav className="fixed inset-x-0 top-0 z-50 bg-surface/90 p-8 backdrop-blur-sm lg:px-32" aria-label="Primary navigation">
        <div className="site-container">
          <ul className="flex gap-10 list-none m-0 p-0">
            {navigation.map((item) => (
              <li key={item.title}>
                <a
                  href={`#${item.title.toLowerCase()}`}
                  className="text-on-surface font-semibold text-md uppercase tracking-widest hover:text-primary transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Header;