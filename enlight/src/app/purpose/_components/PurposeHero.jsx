import React from "react";

function PurposeHero() {
  return (
    <section className="purpose-hero">
      <div className="purpose-hero__visual" aria-hidden="true">
        <img
          src="/images/purpose/hero-visual.png"
          alt=""
          width={944}
          height={944}
        />
      </div>
      <div className="_container">
        <div className="purpose-hero__content">
          <h1>
            Don&apos;t guess your
            <br />
            marketing strategy
          </h1>
          <p>
            <strong>Start with your goal instead.</strong>
            <br />
            Tell us what you want to achieve, and we will build the exact
            roadmap to get you there.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PurposeHero;
