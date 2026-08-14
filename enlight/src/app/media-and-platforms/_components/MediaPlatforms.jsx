import React from "react";

const PIXEL_ROWS = [
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
  [0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
];

const STATS = [
  {
    id: 1,
    title: "Over 50 Reputable Advertising Networks",
    content:
      "We've carefully chosen over 50 reputable advertising networks to promote your project effectively. Each has been tried and tested to ensure effectiveness within the crypto space.",
    wide: false,
  },
  {
    id: 2,
    title: "Total Audience Exceeding 7 Billion Users",
    content:
      "The combined audience size of all our media platforms and advertising networks is over 7 billion users.",
    wide: true,
    visual: {
      src: "/images/media-and-platforms/stat-audience.png",
      modifier: "audience",
      width: 561,
      height: 531,
    },
  },
  {
    id: 3,
    title: "Global Geographical Reach - 114 Countries",
    content:
      "Our media platforms and advertising networks have a global reach, ensuring your project gets exposure worldwide. We work hard to expand the geography.",
    wide: true,
    visual: {
      src: "/images/media-and-platforms/stat-geo.png",
      modifier: "geo",
      width: 592,
      height: 531,
    },
  },
  {
    id: 4,
    title: "Specialised Crypto Audience",
    content:
      "Reach a highly targeted audience interested in cryptocurrency and blockchain technology through our specialised crypto advertising.",
    wide: false,
  },
  {
    id: 5,
    title: "Average ROI - 23%",
    content:
      "An average return on investment is about 23%, significantly higher than the industry average. We tailor advertising campaigns to your project's unique needs, ensuring maximum effectiveness and profitability.",
    wide: false,
  },
  {
    id: 6,
    title: "80% Average Advertisement Reaches",
    content:
      "On average, each advertisement reaches thousands of users across our platforms.",
    wide: true,
    visual: {
      src: "/images/media-and-platforms/stat-reach.png",
      modifier: "reach",
      width: 531,
      height: 531,
    },
  },
];

const LOGOS = [
  { src: "/images/media-and-platforms/logos/logo-1.svg", width: 200, height: 80 },
  { src: "/images/media-and-platforms/logos/logo-2.svg", width: 340, height: 80 },
  { src: "/images/media-and-platforms/logos/logo-3.png", width: 80, height: 80 },
  { src: "/images/media-and-platforms/logos/logo-4.svg", width: 327, height: 80 },
  { src: "/images/media-and-platforms/logos/logo-5.png", width: 266, height: 80 },
  { src: "/images/media-and-platforms/logos/logo-6.png", width: 80, height: 80 },
  { src: "/images/media-and-platforms/logos/logo-7.svg", width: 319, height: 80 },
  { src: "/images/media-and-platforms/logos/logo-8.svg", width: 422, height: 80 },
  { src: "/images/media-and-platforms/logos/logo-9.svg", width: 289, height: 80 },
  { src: "/images/media-and-platforms/logos/logo-10.svg", width: 254, height: 80 },
];

function MediaPlatforms() {
  return (
    <>
      <section className="media-pixels" aria-hidden="true">
        {PIXEL_ROWS.flatMap((row, rowIndex) =>
          row.map((on, cellIndex) => (
            <span
              key={`${rowIndex}-${cellIndex}`}
              className={`media-pixels__cell${on ? " is-on" : ""}`}
            />
          ))
        )}
      </section>
      <section className="media-reach">
        <div className="_container">
          <div className="media-reach__panel">
            <p className="media-reach__intro">
              With Enlight, your project gains access to over 50 reputable
              advertising platforms and media channels, reaching an audience of
              over 7 billion users.
            </p>
            {STATS.map((item) => (
              <article
                key={item.id}
                className={`media-stat${item.wide ? " is-wide" : ""}`}
              >
                {item.visual ? (
                  <div
                    className={`media-stat__visual media-stat__visual--${item.visual.modifier}`}
                    aria-hidden="true"
                  >
                    <img
                      src={item.visual.src}
                      alt=""
                      width={item.visual.width}
                      height={item.visual.height}
                    />
                  </div>
                ) : null}
                <div className="media-stat__copy">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="media-logos">
            <h2>Our platforms and media</h2>
            <div className="media-logos__marquee">
              <div className="media-logos__track">
                {[0, 1].map((copy) => (
                  <div
                    className="media-logos__group"
                    key={copy}
                    aria-hidden={copy === 1 ? "true" : undefined}
                  >
                    {LOGOS.map((logo) => (
                      <img
                        key={`${copy}-${logo.src}`}
                        src={logo.src}
                        alt=""
                        width={logo.width}
                        height={logo.height}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MediaPlatforms;
