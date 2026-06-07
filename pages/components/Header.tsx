import React from "react";
import config from "../index.json";

const Header = () => {
  const navigation = config.navigation;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-8 lg:px-32">
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
    </nav>
  );
};

export default Header;