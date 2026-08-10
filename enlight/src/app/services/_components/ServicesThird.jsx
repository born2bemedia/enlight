import React from "react";
import Link from "next/link";
import Accordion from "./Accordion";

function ServicesThird() {
  return (
    <>
      <section className="services-assess">
        <div className="_container">
          <div className="services-assess__intro">
            <h2>Uncertain where to begin?</h2>
            <p>
              Let us assess your project and determine the best course of
              action. Choose the stage that best describes your project.
            </p>
          </div>

          <div className="services-assess__panel">
            <div
              className="services-assess__glow services-assess__glow--top"
              aria-hidden="true"
            >
              <img
                src="/images/services/accordion-glow.png"
                alt=""
                width={864}
                height={880}
              />
            </div>
            <div
              className="services-assess__glow services-assess__glow--bottom"
              aria-hidden="true"
            >
              <img
                src="/images/services/accordion-glow.png"
                alt=""
                width={864}
                height={880}
              />
            </div>
            <Accordion />
          </div>
        </div>
      </section>

      <section className="home-assessment">
        <div className="home-assessment__bg" aria-hidden="true" />

        <div className="_container">
          <div className="home-assessment__content">
            <h2>Need assistance?</h2>
            <Link href="/contact-us" className="home-assessment__cta">
              <span className="home-assessment__cta-label">Contact Us</span>
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
    </>
  );
}

export default ServicesThird;
