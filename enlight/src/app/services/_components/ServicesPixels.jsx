import React from "react";

const PIXEL_ROWS = [
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
  [0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
];

function ServicesPixels() {
  return (
    <div className="services-pixels" aria-hidden="true">
      {PIXEL_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="services-pixels__row">
          {row.map((cell, cellIndex) => (
            <span
              key={cellIndex}
              className={`services-pixels__cell${cell ? " is-on" : ""}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ServicesPixels;
