import React from "react";

function SingleServiceThird({ title = "", items = [] }) {
  return (
    <section className="section">
      <div className="_container">
        <span className="section-label">SingleServiceThird</span>
        <h2
          className="section-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="placeholder-block">
          {items.map((item, i) => (
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

export default SingleServiceThird;
