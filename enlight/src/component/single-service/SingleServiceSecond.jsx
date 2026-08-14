import React from "react";

function PixelCorners() {
  return (
    <>
      <span className="service-challenge__pixels service-challenge__pixels--tl" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </span>
      <span className="service-challenge__pixels service-challenge__pixels--br" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </span>
    </>
  );
}

function SingleServiceSecond({
  title = "",
  subtitle = "",
  challenges = [],
  theme = "",
  layout = "grid",
}) {
  if (layout === "split") {
    return (
      <section className="service-insights">
        <div className="_container">
          <div className="service-insights__body">
            <div className="service-insights__intro">
              <h2 dangerouslySetInnerHTML={{ __html: title }} />
              <p dangerouslySetInnerHTML={{ __html: subtitle }} />
            </div>
            <div className="service-insights__list">
              {challenges.map((item) => (
                <article key={item.id} className="service-insight">
                  <span className="service-insight__index">{item.id}</span>
                  <div className="service-insight__copy">
                    <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p>{item.content}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`service-challenges${theme ? ` is-${theme}` : ""}`}
    >
      <div className="_container">
        <div className="service-challenges__intro">
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: subtitle }} />
        </div>
        <div className="service-challenges__grid">
          {challenges.map((item, index) => {
            const isWide =
              index === challenges.length - 1 && challenges.length % 2 === 1;

            return (
              <article
                key={item.id}
                className={`service-challenge${isWide ? " service-challenge--wide" : ""}`}
              >
                <PixelCorners />
                <span className="service-challenge__index">{item.id}</span>
                <div className="service-challenge__copy">
                  <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p>{item.content}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SingleServiceSecond;
