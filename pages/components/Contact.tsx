import React from "react";
import config from "../index.json";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contact = config.contact;

  return (
    <section id="contact" className="px-8 md:px-32 py-20 pb-40 text-white flex flex-col items-center">
      <h2 className="section-title load-hidden">{contact.title}</h2>
      <div className="contact-wrapper mt-12 px-8 load-hidden">
        <p className="mb-10">{contact.description}</p>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;