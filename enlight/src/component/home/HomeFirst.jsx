import React from "react";
import Link from "next/link";

function HomeFirst() {
  return (
    <section className="home-hero">
      <div className="_container">
        <div className="home-hero__content">
          <div className="home-hero__text">
            <h1>
              Marketing Built
              <br />
              for Crypto
            </h1>
            <p>
              Grow your visibility, reputation and community with strategies
              designed specifically for crypto projects.
            </p>
          </div>

          <Link href="/contact-us" className="home-hero__cta">
            <span className="home-hero__cta-label">Start</span>
            <span className="home-hero__cta-icon" aria-hidden="true">
              <img
                src="/images/header/arrow-green.svg"
                alt=""
                width={20}
                height={20}
              />
            </span>
          </Link>
        </div>
      </div>

      <div className="home-hero__visual" aria-hidden="true">
        <img
          src="/images/home/hero-cubes.jpg"
          alt=""
          width={1024}
          height={962}
        />
      </div>
    </section>
  );
}

export default HomeFirst;
