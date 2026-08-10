"use client";

import React, { useState } from "react";

function ResourcesLater() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="resources-later">
      <div className="resources-later__bg" aria-hidden="true" />
      <div className="_container">
        <div className="resources-later__visual" aria-hidden="true">
          <img
            src="/images/resources/later-visual.png"
            alt=""
            width={355}
            height={441}
          />
        </div>

        <div className="resources-later__content">
          <div className="resources-later__text">
            <h2>Read This Article Later</h2>
            <p>
              No time to read it now? Send it to your email and access it from
              any device whenever it&apos;s convenient.
            </p>
          </div>

          <form className="resources-later__form" onSubmit={handleSubmit}>
            <label className="resources-later__field">
              <span className="visually-hidden">Your email</span>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <button type="submit" className="resource-read">
              <span className="resource-read__label">Send</span>
              <span className="resource-read__icon" aria-hidden="true">
                <img
                  src="/images/resources/arrow-right.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ResourcesLater;
