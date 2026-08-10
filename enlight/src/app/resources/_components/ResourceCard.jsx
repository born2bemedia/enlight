import React from "react";
import Link from "next/link";

function ResourceCard({ title, image, excerpt, slug }) {
  return (
    <article className="placeholder-block">
      <h2 className="section-title" style={{ fontSize: 24 }}>
        {title}
      </h2>
      <p className="section-text">{excerpt}</p>
      <p style={{ marginTop: 8, color: "var(--color-text-muted)", fontSize: 13 }}>
        Image: {image}
      </p>
      <div style={{ marginTop: 16 }}>
        <Link href={`/resources/${slug}`} className="main-button">
          Read
        </Link>
      </div>
    </article>
  );
}

export default ResourceCard;
