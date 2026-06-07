import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import config from "../index.json";

function ContactForm() {
  const contact = config.contact;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [state, handleSubmit] = useForm(contact.formId);
  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }

  return (
    <div className="contact-form w-full max-w-[60rem] mx-auto mt-12 px-8">
      <form
        onSubmit={handleSubmit}
        action={`https://formspree.io/f/${contact.formId}`}
        method="post"
      >
        <div className="mb-8">
          <label className="contact-form__label" htmlFor="name">
            Name
          </label>
          <input
            className="contact-form__input"
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label className="contact-form__label" htmlFor="email">
            Email
          </label>
          <input
            className="contact-form__input"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label className="contact-form__label" htmlFor="message">
            Message
          </label>
          <textarea
            className="contact-form__input"
            id="message"
            name="message"
            rows={5}
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="mt-8 text-center">
          <button
            type="submit"
            disabled={state.submitting}
            className="cta-btn cta-btn--hero"
          >
            <span>Send</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
