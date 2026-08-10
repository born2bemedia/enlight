import React from "react";
import Link from "next/link";

const services = [
  {
    href: "/community-building",
    title: "Community Building",
    description:
      "Crypto communities shape reputation, adoption and investor confidence. We build engaged communities that encourage meaningful discussions, reduce churn and support long-term project growth.",
  },
  {
    href: "/search-visibility-and-traffic",
    title: "Search Visibility & Traffic",
    description:
      "Traditional SEO isn't enough for crypto. We improve discoverability across search engines and crypto-specific channels while navigating industry restrictions and highly competitive search landscapes.",
  },
  {
    href: "/reputation-experience-and-expertise",
    title: "Reputation, Experience & Expertise",
    description:
      "Trust is one of the biggest barriers to crypto adoption. We strengthen your reputation through expert positioning, authoritative content and strategic media exposure that increases confidence among users and investors.",
  },
  {
    href: "/branding-solutions",
    title: "Branding Solutions",
    description:
      "In a market crowded with similar projects, a strong brand creates differentiation. We develop clear positioning and a consistent visual identity that helps your project stand out and remain recognisable across every touchpoint.",
  },
];

function ServicesSecond() {
  return (
    <section className="services-grid">
      <div className="_container">
        <div className="services-grid__list">
          {services.map((service) => (
            <article key={service.href} className="services-card">
              <div className="services-card__copy">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
              <Link href={service.href} className="services-card__cta">
                <span>Learn More</span>
                <span className="services-card__cta-icon" aria-hidden="true">
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

export default ServicesSecond;
