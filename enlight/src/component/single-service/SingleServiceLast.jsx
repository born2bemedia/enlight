"use client";

import React, { useState } from "react";
import FormPopup from "../FormPopup";

function SingleServiceLast({
  title = "",
  buttonText = "Contact us",
  image = "",
  visualSize = "",
  compactButton = false,
}) {
  const [popupOpened, setPopupOpened] = useState(false);
  const sectionClass = [
    "service-cta",
    image ? "has-visual" : "",
    visualSize === "lg" ? "has-visual-lg" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClass}>
      <div className="_container">
        <div className="service-cta__body">
          <div className="service-cta__content">
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <button
              type="button"
              className={`service-cta__button${compactButton ? " is-compact" : ""}`}
              onClick={() => setPopupOpened(true)}
            >
              <span className="service-cta__button-label">{buttonText}</span>
              <span className="service-cta__button-icon" aria-hidden="true">
                <img
                  src="/images/header/arrow-white.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </span>
            </button>
          </div>
          {image ? (
            <div
              className={`service-cta__visual${visualSize === "lg" ? " is-lg" : ""}`}
              aria-hidden="true"
            >
              <img
                src={image}
                alt=""
                width={visualSize === "lg" ? 1387 : 902}
                height={visualSize === "lg" ? 1387 : 902}
              />
            </div>
          ) : null}
        </div>
      </div>
      {popupOpened && (
        <FormPopup
          closePopup={() => setPopupOpened(false)}
          popupTitle="Contact"
        />
      )}
    </section>
  );
}

export default SingleServiceLast;
