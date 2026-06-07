import React, { useState } from "react";
import config from "../index.json";

const Footer = () => {
  const footer = config.footer;
  const [year] = useState(() => new Date().getFullYear());

  return (
    <footer className="bg-surface-dark py-20">
      <div className="social-links flex justify-center">
        {footer.map((item) => (
          <a
            key={item.title}
            rel="noreferrer"
            href={item.url}
            target="_blank"
            aria-label={item.title}
          >
            <i className={`devicon-${item.title.toLowerCase()}-plain`}></i>
          </a>
        ))}
      </div>
      <hr className="my-4 mx-auto w-1/2 border-0 border-t-2 border-gray-500" />
      <p className="footer__text">
        © {year} - Template developed by{" "}
        <a href="https://www.dylanarveson.com">Dylan Arveson</a>
      </p>
      <a href="#hero" className="back-to-top" aria-label="Back to top">
        ↑
      </a>
    </footer>
  );
};

export default Footer;