"use client";

import React, { useState } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";

const ADDRESSES = [
  {
    label: "Registered address:",
    lines: [
      "Rooms 1703-1704, 17/F, Tung Chiu Commercial Centre, 193 Lockhart Road, Wanchai, Hong Kong",
    ],
  },
  {
    label: "Operational address:",
    lines: ["138 Gloucester Rd,", "Wan Chai,", "Hong Kong"],
  },
];

function ContactMap() {
  return (
    <div className="contact-map">
      <img
        className="contact-map__image"
        src="/images/contact/map.png"
        alt=""
        width={600}
        height={600}
      />
      <img
        className="contact-map__pin"
        src="/images/contact/pin.svg"
        alt=""
        width={27}
        height={41}
      />
    </div>
  );
}

function ContactBlock() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="contact-body">
        <div className="_container">
          <div className="contact-top">
            <div className="contact-form-card">
              <ContactForm onSuccess={() => setSent(true)} />
            </div>
            <div className="contact-aside">
              <p className="contact-aside__intro">
                Connect, collaborate, and boost your crypto project&apos;s
                visibility with our expert team.
              </p>
              <div className="contact-aside__details">
                <div className="contact-detail">
                  <p>Send us a letter:</p>
                  <a href="mailto:info@enlight.business">
                    info@enlight.business
                  </a>
                </div>
                <div className="contact-detail">
                  <p>Talk to Enlight:</p>
                  <a href="tel:+447458149408">+44 745 814 94 08</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-addresses">
            <h2>Our addresses</h2>
            <div className="contact-addresses__grid">
              {ADDRESSES.map((item) => (
                <article key={item.label} className="contact-address">
                  <div className="contact-address__copy">
                    <p>{item.label}</p>
                    <h3>
                      {item.lines.map((line, index) => (
                        <React.Fragment key={line}>
                          {line}
                          {index < item.lines.length - 1 ? <br /> : null}
                        </React.Fragment>
                      ))}
                    </h3>
                  </div>
                  <ContactMap />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {sent ? (
        <div className="popup contact-success-popup">
          <div className="overlay" onClick={() => setSent(false)} />
          <div className="contact-success" role="dialog" aria-labelledby="contact-success-title">
            <div className="contact-success__copy">
              <h2 id="contact-success-title">Success!</h2>
              <p>
                Your goal profile is with our strategy team. A crypto marketing
                expert will reach out within 2 hours with your custom framework.
              </p>
            </div>
            <Link href="/" className="contact-success__cta">
              <span>Return to Homepage</span>
              <span className="contact-success__cta-icon" aria-hidden="true">
                <img
                  src="/images/header/arrow-green.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </span>
            </Link>
            <div className="contact-success__visual" aria-hidden="true">
              <img
                src="/images/contact/success-visual.png"
                alt=""
                width={562}
                height={538}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ContactBlock;
