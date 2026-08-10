import { getPost, getSlugs } from "@/src/utils/blogUtils";
import React from "react";
import "@/public/scss/resources.scss";
import ArticleBack from "../_components/ArticleBack";
import ArticleMain from "../_components/ArticleMain";
import ResourcesLater from "../_components/ResourcesLater";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

async function SingleArticle({ params: { slug } }) {
  const post = await getPost(slug);
  const heroImage = post.image?.startsWith("heroes/")
    ? `/images/resources/${post.image}`
    : "/images/resources/article-hero.png";

  return (
    <>
      <ArticleBack />
      <ArticleMain
        title={post.title}
        bodyHtml={post.body}
        heroImage={heroImage}
        date={post.date}
        readTime={post.readTime}
      />
      <ResourcesLater />
    </>
  );
}

export default SingleArticle;
