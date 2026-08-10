import React from "react";
import Link from "next/link";

const services = [
  { href: "/community-building", title: "Community Building" },
  {
    href: "/search-visibility-and-traffic",
    title: "Search Visibility and Traffic",
  },
  {
    href: "/reputation-experience-and-expertise",
    title: "Reputation, Experience and Expertise",
  },
  { href: "/branding-solutions", title: "Branding Solutions" },
];

function ServicesSecond() {
  return (
    <section className="section">
      <div className="_container">
        <span className="section-label">ServicesSecond</span>
        <h2 className="section-title">Our services</h2>
        <div className="placeholder-block">
          {services.map((s) => (
            <div key={s.href} style={{ marginBottom: 8 }}>
              <Link href={s.href}>{s.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSecond;
