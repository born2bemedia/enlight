import React from "react";

function SingleServiceFourth({
  title = "Results you can expect",
  results = [],
  theme = "",
}) {
  return (
    <section className={`service-results${theme ? ` is-${theme}` : ""}`}>
      <div className="_container">
        <h2>{title}</h2>
        <div className="service-results__grid">
          {results.map((item) => (
            <article key={item.id} className="service-result">
              <p className="service-result__value">{item.value}</p>
              <p className="service-result__label">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SingleServiceFourth;
