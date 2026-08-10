import React from "react";
import ServicesPixels from "./ServicesPixels";

function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="services-hero__visual" aria-hidden="true">
        <img
          src="/images/services/hero-visual.png"
          alt=""
          width={1024}
          height={1024}
        />
      </div>
      <div className="_container">
        <div className="services-hero__content">
          <h1>
            Crypto Marketing
            <br />
            Services
          </h1>
          <p>
            Marketing solutions built to increase visibility, strengthen
            credibility and support sustainable growth.
          </p>
        </div>
      </div>
      <ServicesPixels />
    </section>
  );
}

export default ServicesHero;
