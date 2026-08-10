import React from "react";
import ContactForm from "./ContactForm";

function ContactBlock() {
  return (
    <section className="section">
      <div className="_container">
        <span className="section-label">ContactBlock</span>
        <h1 className="section-title">Contact Us</h1>
        <p className="section-text">
          Placeholder layout — form logic kept in ContactForm.
        </p>
        <div className="placeholder-block">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactBlock;
