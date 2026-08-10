import React from "react";

/** 3×16 pattern from Figma node 2243:4378 — 1 = #97D80F, 0 = dark */
const CUBE_PATTERN = [
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
  [0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
];

const COLS = CUBE_PATTERN[0].length;

function HomeThird() {
  return (
    <section
      className="home-cubes"
      aria-hidden="true"
      style={{ "--home-cubes-cols": COLS }}
    >
      {CUBE_PATTERN.flatMap((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <span
            key={`${rowIndex}-${colIndex}`}
            className={`home-cubes__cell${
              cell === 1 ? " home-cubes__cell--green" : " home-cubes__cell--dark"
            }`}
          />
        )),
      )}
    </section>
  );
}

export default HomeThird;
