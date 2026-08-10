import React from "react";
import Link from "next/link";

function HomeFifth() {
  return (
    <section className="home-assessment">
      <div className="home-assessment__bg" aria-hidden="true" />

      <div className="_container">
        <div className="home-assessment__content">
          <h2>Measure Your Marketing Performance</h2>
          <p>
            Find out how your project compares across community growth,
            visibility, reputation, advertising and marketing operations.
            <br />
            Get your Crypto Marketing Health Score in under 2 minutes.
          </p>
          <Link href="/contact-us" className="home-assessment__cta">
            <span className="home-assessment__cta-label">Start Assessment</span>
            <span className="home-assessment__cta-icon" aria-hidden="true">
              <img
                src="/images/header/arrow-white.svg"
                alt=""
                width={20}
                height={20}
              />
            </span>
          </Link>
        </div>

        <div className="home-assessment__visual" aria-hidden="true">
          <img
            src="/images/home/assessment-coins.png"
            alt=""
            width={902}
            height={902}
          />
        </div>
      </div>
    </section>
  );
}

export default HomeFifth;
