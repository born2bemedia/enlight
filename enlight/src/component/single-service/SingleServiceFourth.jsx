import React from "react";

function SingleServiceFourth({ results = [] }) {
  return (
    <section className="section">
      <div className="_container">
        <span className="section-label">SingleServiceFourth</span>
        <h2 className="section-title">Results</h2>
        <div className="placeholder-block">
          {results.map((item, i) => (
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

export default SingleServiceFourth;
