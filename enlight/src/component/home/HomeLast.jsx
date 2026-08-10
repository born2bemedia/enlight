import React from "react";

const CARDS = [
  {
    id: "01",
    title: "Acquisition efficiency",
    text: "More efficient spend across paid and organic channels through better visibility of performance.",
    metrics: [{ label: "CPA reduction:", value: "–25%", large: true }],
  },
  {
    id: "02",
    title: "Conversion performance",
    text: "Higher conversion from traffic to activated users by identifying funnel drop-offs.",
    metrics: [
      { label: "Landing page CVR:", value: "+10–20%", labelLines: ["Landing page", "CVR:"] },
      { label: "Onboarding completion:", value: "+15–30%" },
    ],
  },
  {
    id: "03",
    title: "Attribution clarity",
    text: "More marketing impact becomes visible instead of being lost in fragmented tools.",
    metrics: [{ label: "Tracked conversion coverage:", value: "+25–60%" }],
  },
  {
    id: "04",
    title: "Operational efficiency",
    text: "Less time spent on cross-platform reporting and campaign tracking.",
    metrics: [{ label: "Reporting & manual work:", value: "–50–70%" }],
  },
];

function PixelCorners() {
  return (
    <>
      <span className="home-impact__pixels home-impact__pixels--tl" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </span>
      <span className="home-impact__pixels home-impact__pixels--br" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </span>
    </>
  );
}

function HomeLast() {
  return (
    <section className="home-impact">
      <div className="_container">
        <h2>Typical impact delivered by Enlight marketing experts</h2>

        <div className="home-impact__grid">
          {CARDS.map((card) => (
            <article key={card.id} className="home-impact__card">
              <div className="home-impact__info">
                <PixelCorners />
                <span className="home-impact__index">{card.id}</span>
                <div className="home-impact__copy">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </div>

              <div className="home-impact__metrics">
                {card.metrics.map((metric) => (
                  <div key={metric.label} className="home-impact__metric">
                    <p className="home-impact__metric-label">
                      {metric.labelLines
                        ? metric.labelLines.map((line) => (
                            <span key={line}>
                              {line}
                              <br />
                            </span>
                          ))
                        : metric.label}
                    </p>
                    <p
                      className={`home-impact__metric-value${
                        metric.large ? " home-impact__metric-value--lg" : ""
                      }`}
                    >
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeLast;
