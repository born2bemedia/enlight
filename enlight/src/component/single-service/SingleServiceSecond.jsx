import React from "react";

function SingleServiceSecond({ title = "", subtitle = "", challenges = [] }) {
  return (
    <section className="section">
      <div className="_container">
        <span className="section-label">SingleServiceSecond</span>
        <h2
          className="section-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="section-text"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
        <div className="placeholder-block">
          {challenges.map((item, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <strong>{item.title}</strong>
              <div>{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SingleServiceSecond;
