import React from "react";

const kpis = [
  { value: "7 EUR", label: "Average CPC" },
  { value: "40 EUR", label: "Average CPL" },
  { value: "1.7%", label: "Average Conversion Rate" },
];

function HomeSecond() {
  return (
    <section className="home-second">
      <div className="_container">
        <div className="home-second__intro">
          <h2>Why Traditional Marketing Fails in Crypto</h2>
          <p>
            Most marketing channels were not built for crypto. Rising
            acquisition costs, strict advertising policies and low conversion
            rates make growth increasingly expensive.
          </p>
        </div>

        <div className="home-second__panel">
          <div className="home-second__drop" aria-hidden="true">
            <img
              src="/images/home/kpi-drop.png"
              alt=""
              width={864}
              height={880}
            />
          </div>

          <h3>Average Marketing KPIs</h3>
          <p className="home-second__panel-text">
            These metrics underscore the inefficiency of traditional marketing
            approaches, which often incur high costs and drain budgets without
            delivering substantial returns.
          </p>

          <div className="home-second__metrics">
            {kpis.map((kpi) => (
              <div className="home-second__metric" key={kpi.label}>
                <span className="home-second__metric-value">{kpi.value}</span>
                <span className="home-second__metric-label">{kpi.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSecond;
