import React from "react";
import {
  brandingFeaturedMistake,
  brandingMistakes,
  brandingServices,
} from "@/src/lib/branding";

const PIXEL_ROWS = [
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
  [0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
];

function BrandingBody() {
  return (
    <>
      <section className="branding-pixels" aria-hidden="true">
        {PIXEL_ROWS.flatMap((row, rowIndex) =>
          row.map((on, cellIndex) => (
            <span
              key={`${rowIndex}-${cellIndex}`}
              className={`branding-pixels__cell${on ? " is-on" : ""}`}
            />
          ))
        )}
      </section>
      <section className="branding-body">
        <div className="_container">
          <div className="branding-mistakes">
            <h2>Common branding mistakes in the crypto industry</h2>
            <p className="branding-mistakes__intro">
              Enlight offers comprehensive brand packaging tailored to your
              needs, ensuring consistency in design, messaging, and perception
              across all channels, from website design to marketing strategies.
            </p>
            <div className="branding-mistakes__grid">
              <article className="branding-mistake branding-mistake--featured">
                <div className="branding-mistake__copy">
                  <h3>{brandingFeaturedMistake.title}</h3>
                  <p>{brandingFeaturedMistake.content}</p>
                </div>
                <div className="branding-mistake__visual" aria-hidden="true">
                  <img
                    src={brandingFeaturedMistake.visual}
                    alt=""
                    width={720}
                    height={720}
                  />
                </div>
              </article>
              {brandingMistakes.map((item) => (
                <article key={item.title} className="branding-mistake">
                  <div className="branding-mistake__visual" aria-hidden="true">
                    <img src={item.visual} alt="" width={200} height={180} />
                  </div>
                  <div className="branding-mistake__copy">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="branding-services">
            <h2>Our Branding services</h2>
            <div className="branding-services__layout">
              <nav className="branding-toc" aria-label="Branding services">
                <ul>
                  {brandingServices.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`}>{item.navLabel}</a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="branding-services__cards">
                {brandingServices.map((item) => (
                  <article
                    key={item.id}
                    id={item.id}
                    className="branding-service"
                  >
                    <div className="branding-service__head">
                      <span className="branding-service__icon">
                        <img
                          src={`/images/single-service/branding/icons/${item.icon}`}
                          alt=""
                          width={28}
                          height={28}
                        />
                      </span>
                      <h3>{item.title}</h3>
                    </div>
                    <p>{item.content}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BrandingBody;
