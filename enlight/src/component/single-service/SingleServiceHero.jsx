import React from "react";

function SingleServiceHero({ title = "", subtitle = "", image = "" }) {
  return (
    <section className="section">
      <div className="_container">
        <span className="section-label">SingleServiceHero</span>
        <h1
          className="section-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="section-text"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
        <div className="placeholder-block">Image: {image || "—"}</div>
      </div>
    </section>
  );
}

export default SingleServiceHero;
