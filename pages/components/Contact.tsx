import React from "react";
import config from "../index.json";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contact = config.contact;

  return (
    <section id="contact" className="text-white">
      <div className="container contact-container">
        <h2 className="section-title load-hidden">{contact.title}</h2>
        <div className="contact-wrapper mt-12 px-8 load-hidden">
          <p className="contact-wrapper__text mb-10">{contact.description}</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;