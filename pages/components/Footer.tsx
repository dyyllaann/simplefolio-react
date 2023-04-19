import React from "react";
import config from "../index.json";

const Footer = () => {
  const contact = config.contact;
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="footer px-8 py-16 lg:py-32 flex justify-center align-center flex-col bg-neutral-800">
      <h1 className="uppercase font-bold text-center text-white text-bold text-4xl">Footer</h1>
      <div>
        <a rel="noreferrer" href={contact.twitter} target="_blank">
          <i className="fa fa-twitter fa-inverse"></i>
        </a>
        <a rel="noreferrer" href={contact.linkedin} target="_blank">
          <i className="fa fa-linkedin fa-inverse"></i>
        </a>
        <a rel="noreferrer" href={contact.github} target="_blank">
          <i className="fa fa-github fa-inverse"></i>
        </a>
      </div>
      <span className="text-sm text-center text-neutral-600">
        © {getYear()} - Template developed by <a href="#">Dylan Arveson</a>
      </span>
    </div>
  );
};

export default Footer;