"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import ResourceCard from "./ResourceCard";

const FEATURED = {
  title: "How to Position a Crypto Project in a Competitive Market",
  excerpt:
    "More than 15,000 cryptocurrencies and thousands of blockchain businesses compete for visibility today. Yet if you visit many crypto websites, you'll find remarkably similar messaging—this is not a branding problem, it is a positioning problem.",
  slug: "how-to-position-a-crypto-project-in-a-competitive-market",
  image:
    "/images/resources/heroes/how-to-position-a-crypto-project-in-a-competitive-market.png",
};

// Figma Article 15 → 1 (newest first; Article 1 last on page 3)
const ARTICLES = [
  {
    title: "How to differentiate your crypto project from competitors",
    excerpt:
      "When marketing looks the same across thousands of projects, differentiation becomes a competitive advantage. Learn how to stand out.",
    slug: "how-to-differentiate-your-crypto-project-from-competitors",
  },
  {
    title: "How to Turn Crypto Community Members into Brand Advocates",
    excerpt:
      "Community recommendations can outweigh paid ads. Learn how to turn members into advocates who grow your brand.",
    slug: "how-to-turn-crypto-community-members-into-brand-advocates",
  },
  {
    title: "Which Platform Is Best for Building a Crypto Community?",
    excerpt:
      "Telegram, Discord and X serve different purposes. Choose the right platform for your audience and business objectives.",
    slug: "which-platform-is-best-for-building-a-crypto-community",
  },
  {
    title: "How to Build Authority Before Crypto Investors Find Your Project",
    excerpt:
      "Investors rarely back projects they've never heard of. Learn how to build authority before the first investment conversation begins.",
    slug: "how-to-build-authority-before-crypto-investors-find-your-project",
  },
  {
    title: "How to Build Trust in a Crypto Project",
    excerpt:
      "In crypto, trust shapes adoption more than technology alone. Learn practical ways to build credibility with users, partners and investors.",
    slug: "how-to-build-trust-in-a-crypto-project",
  },
  {
    title: "Why Most Crypto SEO Strategies Fail (and What Actually Works)",
    excerpt:
      "Most SEO campaigns fail to deliver consistent organic growth. Explore why crypto SEO breaks down—and what actually works.",
    slug: "why-most-crypto-seo-strategies-fail-and-what-actually-works",
  },
  {
    title: "Crypto SEO in the AI Search Era: How to Stay Visible Beyond Google",
    excerpt:
      "AI-generated search summaries are changing how users discover projects. Learn how crypto brands stay visible beyond traditional Google rankings.",
    slug: "crypto-seo-in-the-ai-search-era-how-to-stay-visible-beyond-google",
  },
  {
    title: "What Community KPIs Should a Crypto Project Track?",
    excerpt:
      "A large member count can look impressive while engagement stays low. Learn which community KPIs actually support long-term crypto growth.",
    slug: "what-community-kpis-should-a-crypto-project-track",
  },
  {
    title: "Why Is My Crypto Community Not Growing?",
    excerpt:
      "Growing a crypto community has never been easier. Keeping it engaged has never been harder. Discover the strategic issues that reduce participation and weaken long-term loyalty.",
    slug: "why-is-my-crypto-community-not-growing",
  },
  {
    title: "Navigating compliance in crypto marketing: a practical guide",
    excerpt:
      "Understand the complexities of compliance in crypto marketing and learn how to navigate them effectively. Discover practical strategies and best practices to ensure that your marketing efforts comply with regulations while maximising your project's visibility and success.",
    slug: "navigating-compliance-in-crypto-marketing-a-practical-guide",
  },
  {
    title: "The ROI of effective crypto marketing: what you need to know",
    excerpt:
      "Discover the key factors that contribute to the success of your crypto marketing efforts. Learn how to measure and maximise your return on investment (ROI) with proven marketing strategies tailored to the crypto industry.",
    slug: "the-roi-of-effective-crypto-marketing-what-you-need-to-know",
  },
  {
    title: "Building trust in the crypto community: strategies for success",
    excerpt:
      "Explore proven strategies for establishing trust and credibility within the crypto community. From transparent communication to reliable customer support, learn how to foster trust, build lasting relationships, and enhance the reputation of your crypto project.",
    slug: "building-trust-in-the-crypto-community-strategies-for-success",
  },
  {
    title: "Competing in the crypto market: essential marketing tactics",
    excerpt:
      "Discover the key marketing tactics to help your crypto project stand out in a crowded market. From effective community building to strategic content creation, learn how to gain a competitive edge and maximise your project's visibility and success in crypto.",
    slug: "competing-in-the-crypto-market-essential-marketing-tactics",
  },
  {
    title: "Top mistakes to avoid when promoting your crypto project",
    excerpt:
      "Learn how to navigate the complex world of crypto marketing by avoiding these common mistakes. From neglecting branding to disregarding compliance, we explore the pitfalls hindering your project's success and provide expert insights on overcoming them.",
    slug: "top-mistakes-to-avoid-when-promoting-your-crypto-project",
  },
];

const PER_PAGE = 6;

const SHARE_LINKS = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "/images/resources/icon-instagram.svg",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "/images/resources/icon-linkedin.svg",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "/images/resources/icon-facebook.svg",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: "/images/resources/icon-twitter.svg",
  },
];

function ResourcesLoop() {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(ARTICLES.length / PER_PAGE));

  const pageArticles = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return ARTICLES.slice(start, start + PER_PAGE);
  }, [page]);

  return (
    <section className="resources-loop">
      <div className="_container">
        <div className="resources-loop__panel">
          <article className="resources-featured">
            <div
              className="resources-featured__bg"
              aria-hidden="true"
              style={{ backgroundImage: `url(${FEATURED.image})` }}
            />
            <div className="resources-featured__share">
              <span>Share</span>
              {SHARE_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                >
                  <img src={item.icon} alt="" width={20} height={20} />
                </a>
              ))}
            </div>
            <div className="resources-featured__footer">
              <div className="resources-featured__copy">
                <h2>{FEATURED.title}</h2>
                <p>{FEATURED.excerpt}</p>
              </div>
              <Link
                href={`/resources/${FEATURED.slug}`}
                className="resource-read"
              >
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

          <div className="resources-more">
            <h2>More to read</h2>
            <div className="resources-more__grid">
              {pageArticles.map((article) => (
                <ResourceCard key={article.slug} {...article} />
              ))}
            </div>

            {totalPages > 1 && (
              <div
                className="resources-pagination"
                role="navigation"
                aria-label="Pagination"
              >
                <button
                  type="button"
                  className="resources-pagination__arrow"
                  aria-label="Previous page"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                >
                  <img
                    src="/images/resources/arrow-left.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (n) => (
                    <button
                      key={n}
                      type="button"
                      className={`resources-pagination__page${
                        n === page ? " is-active" : ""
                      }`}
                      onClick={() => setPage(n)}
                    >
                      {n}
                    </button>
                  ),
                )}
                <button
                  type="button"
                  className="resources-pagination__arrow"
                  aria-label="Next page"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                >
                  <img
                    src="/images/resources/pag-arrow-right.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResourcesLoop;
