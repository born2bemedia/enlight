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
        className="main-button"
      >
        Chat with Enlight Experts
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
