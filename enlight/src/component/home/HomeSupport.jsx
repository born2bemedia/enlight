import React from "react";
import Link from "next/link";

const CARDS = [
  {
    title: "24/7 Support",
    text: "Whenever you need it, wherever you are.",
    image: "/images/home/support/card-1.png",
    imageHeight: 236,
  },
  {
    title: "20 Experts",
    text: "Ready to assist in any crypto task.",
    image: "/images/home/support/card-2.png",
    imageHeight: 267,
  },
  {
    title: "67 Minutes",
    text: "Average time for problem resolution.",
    image: "/images/home/support/card-3.png",
    imageHeight: 236,
  },
];

function HomeSupport() {
  return (
    <section className="home-support">
      <div className="home-support__bg" aria-hidden="true" />

      <div className="_container">
        <h2>
          Measure Your Marketing
          <br />
          Performance
        </h2>

        <div className="home-support__grid">
          {CARDS.map((card) => (
            <article key={card.title} className="home-support__card">
              <div
                className="home-support__visual"
                style={{ "--support-visual-h": `${card.imageHeight}px` }}
              >
                <img
                  src={card.image}
                  alt=""
                  width={300}
                  height={card.imageHeight}
                />
                <span className="home-support__card-arrow" aria-hidden="true">
                  <img
                    src="/images/header/arrow.svg"
                    alt=""
                    width={12}
                    height={12}
                  />
                </span>
              </div>
              <div className="home-support__copy">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>

        <Link href="/contact-us" className="home-support__cta">
          <span className="home-support__cta-label">Contact Sales</span>
          <span className="home-support__cta-icon" aria-hidden="true">
            <img
              src="/images/header/arrow-white.svg"
              alt=""
              width={20}
              height={20}
            />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default HomeSupport;
