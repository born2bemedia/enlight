"use client";

import React, { useState } from "react";
import FormPopup from "@/src/component/FormPopup";

function ChatButton() {
  const [popupOpened, setPopupOpened] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setPopupOpened(true)}
        className="resource-read"
      >
        <span className="resource-read__label">Chat with Enlight Experts</span>
        <span className="resource-read__icon" aria-hidden="true">
          <img
            src="/images/resources/arrow-right.svg"
            alt=""
            width={20}
            height={20}
          />
        </span>
      </button>
      {popupOpened && (
        <FormPopup
          popupTitle="Let's Chat with Enlight Experts"
          closePopup={() => setPopupOpened(false)}
        />
      )}
    </>
  );
}

export default ChatButton;
