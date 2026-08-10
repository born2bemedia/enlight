import React from "react";
import Link from "next/link";

function HomeFirst() {
  return (
    <section className="section home-hero">
      <div className="_container">
        <span className="section-label">HomeFirst</span>
        <h1 className="section-title">How to start your crypto marketing</h1>
        <p className="section-text">
          Hero placeholder — replace with new design. Same section order as v1.
        </p>
        <div className="placeholder-block">
          <Link href="/contact-us" className="main-button">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeFirst;
