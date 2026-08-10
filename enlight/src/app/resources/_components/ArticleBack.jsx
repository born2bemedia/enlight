import React from "react";
import Link from "next/link";

function ArticleBack() {
  return (
    <section className="article-back">
      <div className="_container">
        <Link href="/resources" className="article-back__btn">
          <span className="article-back__icon" aria-hidden="true">
            <img
              src="/images/resources/arrow-back.svg"
              alt=""
              width={20}
              height={20}
            />
          </span>
          <span>Back</span>
        </Link>
      </div>
    </section>
  );
}

export default ArticleBack;
