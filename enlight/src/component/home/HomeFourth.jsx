import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Community Building",
    tagline: "Turn attention into an active, engaged community.",
    items: [
      "Audience Research",
      "Community Growth",
      "Influencer Partnerships",
      "Engagement Campaigns",
    ],
    href: "/community-building",
  },
  {
    title: "Search Visibility & Traffic",
    tagline: "Help the right audience discover your project.",
    items: [
      "SEO Optimisation",
      "Community Growth",
      "Organic Traffic Growth",
      "Search Performance Tracking",
    ],
    href: "/search-visibility-and-traffic",
  },
  {
    title: "Reputation, Experience & Expertise",
    tagline: "Build trust where it matters most.",
    items: [
      "Authority Building",
      "Media Coverage",
      "Expert Content",
      "Reputation Management",
    ],
    href: "/reputation-experience-and-expertise",
  },
  {
    title: "Community Building",
    tagline: "Turn attention into an active, engaged community.",
    items: [
      "Audience Research",
      "Community Growth",
      "Influencer Partnerships",
      "Engagement Campaigns",
    ],
    href: "/community-building",
  },
];

function HomeFourth() {
  return (
    <section className="home-results">
      <div className="_container">
        <div className="home-results__intro">
          <h2>How Enlight Delivers Better Results</h2>
          <p>
            Most marketing channels were not built for crypto. Rising
            acquisition costs, strict advertising policies and low conversion
            rates make growth increasingly expensive.
          </p>
        </div>

        <div className="home-results__grid">
          {services.map((service, index) => (
            <article className="home-results__card" key={`${service.title}-${index}`}>
              <div className="home-results__card-body">
                <div className="home-results__card-head">
                  <h3>{service.title}</h3>
                  <p>{service.tagline}</p>
                </div>

                <ul className="home-results__list">
                  {service.items.map((item) => (
                    <li key={item}>
                      <span className="home-results__bullet" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={service.href} className="home-results__cta">
                <span className="home-results__cta-label">Learn More</span>
                <span className="home-results__cta-icon" aria-hidden="true">
                  <img
                    src="/images/header/arrow-green.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeFourth;
