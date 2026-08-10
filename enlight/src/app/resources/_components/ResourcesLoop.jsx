import React from "react";
import ResourceCard from "./ResourceCard";

const articles = [
  {
    title: "Top mistakes to avoid when promoting your crypto project",
    excerpt:
      "Learn how to navigate the complex world of crypto marketing by avoiding these common mistakes.",
    slug: "top-mistakes-to-avoid-when-promoting-your-crypto-project",
    image: "article1.png",
  },
  {
    title: "Competing in the crypto market: essential marketing tactics",
    excerpt:
      "Discover the key marketing tactics to help your crypto project stand out in a crowded market.",
    slug: "competing-in-the-crypto-market-essential-marketing-tactics",
    image: "article2.png",
  },
  {
    title: "Building trust in the crypto community: strategies for success",
    excerpt:
      "Explore proven strategies for establishing trust and credibility within the crypto community.",
    slug: "building-trust-in-the-crypto-community-strategies-for-success",
    image: "article3.png",
  },
  {
    title: "The ROI of effective crypto marketing: what you need to know",
    excerpt:
      "Discover the key factors that contribute to the success of your crypto marketing efforts.",
    slug: "the-roi-of-effective-crypto-marketing-what-you-need-to-know",
    image: "article4.png",
  },
  {
    title: "Navigating compliance in crypto marketing: a practical guide",
    excerpt:
      "Understand the complexities of compliance in crypto marketing and learn how to navigate them.",
    slug: "navigating-compliance-in-crypto-marketing-a-practical-guide",
    image: "article5.png",
  },
];

function ResourcesLoop() {
  return (
    <section className="section">
      <div className="_container">
        <span className="section-label">ResourcesLoop</span>
        <div style={{ display: "grid", gap: 16 }}>
          {articles.map((article) => (
            <ResourceCard key={article.slug} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResourcesLoop;
