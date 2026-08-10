"use client";

import React, { useState } from "react";
import FormPopup from "../FormPopup";

function SingleServiceLast({ title = "" }) {
  const [popupOpened, setPopupOpened] = useState(false);

  return (
    <section className="section">
      <div className="_container">
        <span className="section-label">SingleServiceLast</span>
        <h2
          className="section-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="placeholder-block">
          <button
            type="button"
            className="main-button"
            onClick={() => setPopupOpened(true)}
          >
            Contact us
          </button>
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
