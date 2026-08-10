import React from "react";

const features = [
  "Traffic & Visibility",
  "Campaign Performance",
  "Lead Tracking",
  "Conversion Analytics",
  "ROI Monitoring",
  "Automated Reporting",
];

function HomeSeven() {
  return (
    <section className="home-visibility">
      <div className="_container">
        <div className="home-visibility__layout">
          <div className="home-visibility__visual" aria-hidden="true">
            <span className="home-visibility__glow" />
            <img
              src="/images/home/visibility-orb.png"
              alt=""
              width={604}
              height={604}
            />
          </div>

          <div className="home-visibility__content">
            <div className="home-visibility__intro">
              <h2>Need More Visibility Into Your Marketing?</h2>
              <p>
                Marketing shouldn&apos;t be a guessing game. Monitor traffic,
                campaigns, leads, conversions and growth opportunities from a
                single dashboard designed to keep every marketing effort visible
                and measurable.
              </p>
            </div>

            <ul className="home-visibility__list">
              {features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSeven;
