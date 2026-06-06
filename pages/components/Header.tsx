import React from "react";
import config from "../index.json";

const Header = () => {
  const navigation = config.navigation;

  return (
    <nav className="header">
      <ul className="header__menu">
        {navigation.map((item) => (
          <li key={item.title}>
            <a href={`#${item.title.toLowerCase()}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;