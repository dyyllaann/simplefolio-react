import React, { useState } from "react";
import config from "../index.json";

const Footer = () => {
  const footer = config.footer;
  const [year] = useState(() => new Date().getFullYear());

  return (
    <footer className="footer">
      <div className="social-links">
        {footer.twitter && (
          <a rel="noreferrer" href={footer.twitter} target="_blank" aria-label="Twitter">
            <i className="devicon-twitter-original"></i>
          </a>
        )}
        {footer.linkedin && (
          <a rel="noreferrer" href={footer.linkedin} target="_blank" aria-label="LinkedIn">
            <i className="devicon-linkedin-plain"></i>
          </a>
        )}
        {footer.github && (
          <a rel="noreferrer" href={footer.github} target="_blank" aria-label="GitHub">
            <i className="devicon-github-original"></i>
          </a>
        )}
      </div>
      <hr />
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