import React from "react";
import Link from "next/link";

function HomeNine() {
  return (
    <section className="home-roadmap">
      <div className="_container">
        <div className="home-roadmap__body">
          <div className="home-roadmap__content">
            <h2>
              Not sure where
              <br />
              to start?
            </h2>
            <Link href="/purpose" className="home-roadmap__cta">
              <span className="home-roadmap__cta-label">
                Check Your Roadmap
              </span>
              <span className="home-roadmap__cta-icon" aria-hidden="true">
                <img
                  src="/images/header/arrow-white.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </span>
            </Link>
          </div>

          <div className="home-roadmap__visual" aria-hidden="true">
            <img
              src="/images/home/roadmap/visual.png"
              alt=""
              width={1376}
              height={1188}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeNine;
