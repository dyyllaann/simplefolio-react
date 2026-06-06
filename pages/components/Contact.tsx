import React from "react";
import config from "../index.json";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contact = config.contact;

  return (
    <section id="contact">
      <h2 className="section-title">{contact.title}</h2>
      <div className="contact-wrapper">
        <p className="contact-wrapper__text">{contact.description}</p>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;