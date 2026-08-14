import React from "react";

const WAVE_OFFSETS = [0, 40, 80, 120, 80, 40];

function SingleServiceThird({
  title = "",
  items = [],
  iconBase = "/images/single-service",
}) {
  const copies = [0, 1];

  return (
    <section className="service-offers">
      <div className="_container">
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <div className="service-marquee">
        <div className="service-marquee__track">
          {copies.map((copy) => (
            <div
              className="service-marquee__group"
              key={copy}
              aria-hidden={copy === 1 ? "true" : undefined}
            >
              {items.map((item, index) => (
                <article
                  key={`${copy}-${item.id}`}
                  className="service-offer"
                  style={{ paddingTop: WAVE_OFFSETS[index % WAVE_OFFSETS.length] }}
                >
                  <div className="service-offer__card">
                    {item.icon ? (
                      <span className="service-offer__icon">
                        <img
                          src={`${iconBase}/${item.icon}`}
                          alt=""
                          width={40}
                          height={40}
                        />
                      </span>
                    ) : null}
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SingleServiceThird;
