import React from "react";
import Link from "next/link";

function ResourceCard({ title, excerpt, slug }) {
  return (
    <article className="resource-card">
      <div className="resource-card__body">
        <div className="resource-card__copy">
          <h3>{title}</h3>
          <p>{excerpt}</p>
        </div>
        <Link href={`/resources/${slug}`} className="resource-read">
          <span className="resource-read__label">Read</span>
          <span className="resource-read__icon" aria-hidden="true">
            <img
              src="/images/resources/arrow-right.svg"
              alt=""
              width={20}
              height={20}
            />
          </span>
        </Link>
      </div>
    </article>
  );
}

export default ResourceCard;
