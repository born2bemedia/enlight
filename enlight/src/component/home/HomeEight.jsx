import React from "react";
import Link from "next/link";

const features = [
  {
    title: "Dashboards",
    image: "/images/home/platform/dashboards.png",
  },
  {
    title: "Reports",
    image: "/images/home/platform/reports.png",
  },
  {
    title: "Integrations",
    image: "/images/home/platform/integrations.png",
  },
  {
    title: "Automations",
    image: "/images/home/platform/automations.png",
  },
  {
    title: "Analytics",
    image: "/images/home/platform/analytics.png",
  },
  {
    title: "Visualisation",
    image: "/images/home/platform/visualisation.png",
  },
];

function HomeEight() {
  return (
    <section className="home-platform">
      <div className="_container">
        <div className="home-platform__header">
          <h2>Everything Needed to Manage Crypto Marketing</h2>
          <Link href="/contact-us" className="home-platform__cta">
            <span className="home-platform__cta-label">Get Started</span>
            <span className="home-platform__cta-icon" aria-hidden="true">
              <img
                src="/images/header/arrow-green.svg"
                alt=""
                width={20}
                height={20}
              />
            </span>
          </Link>
        </div>

        <div className="home-platform__grid">
          {features.map((item) => (
            <article className="home-platform__card" key={item.title}>
              <h3>{item.title}</h3>
              <div className="home-platform__visual" aria-hidden="true">
                <img src={item.image} alt="" width={600} height={600} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeEight;
