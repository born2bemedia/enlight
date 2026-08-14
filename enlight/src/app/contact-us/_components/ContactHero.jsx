import React from "react";

function ContactHero() {
  return (
    <section className="service-hero contact-hero">
      <div className="_container">
        <div className="service-hero__content">
          <h1>
            Connect with crypto
            <br />
            marketing experts
          </h1>
          <p>To supercharge the growth of your crypto project.</p>
        </div>
      </div>
      <div className="service-hero__visual contact-hero__visual" aria-hidden="true">
        <img
          src="/images/contact/hero-visual.png"
          alt=""
          width={827}
          height={777}
        />
      </div>
    </section>
  );
}

export default ContactHero;
