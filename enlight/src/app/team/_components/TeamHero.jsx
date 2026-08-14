import React from "react";

function TeamHero() {
  return (
    <section className="service-hero team-hero">
      <div className="_container">
        <div className="service-hero__content">
          <h1>How we work</h1>
          <p>
            <strong>Join a day in the life of our team.</strong>
          </p>
        </div>
      </div>
      <div className="service-hero__visual team-hero__visual" aria-hidden="true">
        <img
          src="/images/team/hero-visual.png"
          alt=""
          width={611}
          height={622}
        />
      </div>
    </section>
  );
}

export default TeamHero;
