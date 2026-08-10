"use client";

import React, { useEffect, useState } from "react";

function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 400);
    return () => clearTimeout(t);
  }, []);

  if (hidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "grid",
        placeItems: "center",
        background: "var(--color-bg, #0a0a0a)",
        color: "var(--color-text-muted, #a0a0a0)",
        fontSize: 14,
      }}
    >
      Loading…
    </div>
  );
}

export default Preloader;
