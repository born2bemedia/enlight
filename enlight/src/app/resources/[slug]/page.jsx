import { getPost, getSlugs } from "@/src/utils/blogUtils";
import React from "react";
import "@/public/scss/resources.scss";
import ChatButton from "../_components/ChatButton";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

async function SingleArticle({ params: { slug } }) {
  const post = await getPost(slug);

  return (
    <>
      <section className="section">
        <div className="_container">
          <span className="section-label">Article hero</span>
          <h1 className="section-title">{post.title}</h1>
          <div className="placeholder-block">Image: {post.image}</div>
        </div>
      </section>
      <section className="section">
        <div className="_container">
          <article
            className="section-text"
            style={{ maxWidth: 720 }}
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
          <div style={{ marginTop: 32 }}>
            <ChatButton />
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleArticle;
