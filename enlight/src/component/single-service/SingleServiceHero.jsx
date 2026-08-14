import React from "react";

function SingleServiceHero({
  title = "",
  subtitle = "",
  image = "",
  flipVisual = false,
  visualSize = "",
  wide = false,
  sectionClass = "",
}) {
  const visualClass = [
    "service-hero__visual",
    flipVisual ? "is-flipped" : "",
    visualSize === "lg" ? "is-lg" : "",
    visualSize === "xl" ? "is-xl" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const size = visualSize === "xl" ? 1199 : visualSize === "lg" ? 1003 : 865;
  const src =
    image.startsWith("/") || image.startsWith("http")
      ? image
      : `/images/single-service/${image}`;

  return (
    <section className={`service-hero${sectionClass ? ` ${sectionClass}` : ""}`}>
      <div className="_container">
        <div
          className={`service-hero__content${wide ? " is-wide" : ""}`}
        >
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: subtitle }} />
        </div>
      </div>
      {image ? (
        <div className={visualClass} aria-hidden="true">
          <img
            src={src}
            alt=""
            width={size}
            height={size}
          />
        </div>
      ) : null}
    </section>
  );
}

export default SingleServiceHero;
