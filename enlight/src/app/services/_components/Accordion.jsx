"use client";

import React, { useState } from "react";

function Accordion({ items = [] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="placeholder-block">
      {items.map((item, i) => (
        <div key={i} style={{ marginBottom: 8 }}>
          <button
            type="button"
            onClick={() => setActive(i)}
            style={{
              background: "transparent",
              border: "none",
              color: "inherit",
              cursor: "pointer",
              fontWeight: active === i ? 700 : 400,
            }}
          >
            {item.title}
          </button>
          {active === i && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
