"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import ChatButton from "./ChatButton";

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

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function structureBodyHtml(bodyHtml) {
  const withIds = String(bodyHtml).replace(
    /<h2([^>]*)>(.*?)<\/h2>/gi,
    (_, attrs, inner) => {
      const label = inner.replace(/<[^>]+>/g, "");
      const id = slugify(label);
      return `<h2 id="${id}"${attrs}>${inner}</h2>`;
    },
  );

  const chunks = withIds.split(/(?=<h2\b)/i);
  const intro = chunks[0]?.trim() || "";
  const sections = chunks.slice(1).map((chunk) => {
    const idMatch = chunk.match(/<h2[^>]*\sid="([^"]+)"/i);
    const id = idMatch?.[1] || "";
    const withoutHeadingId = chunk.replace(/\sid="[^"]+"/i, "");
    return `<section class="article-body__section"${id ? ` id="${id}"` : ""}>${withoutHeadingId}</section>`;
  });

  return `${intro ? `<div class="article-body__intro">${intro}</div>` : ""}${sections.join("")}`;
}

function ArticleMain({
  title,
  bodyHtml,
  date = "1 May 2026",
  readTime = "6 min",
  heroImage = "/images/resources/article-hero.png",
}) {
  const heroIncludesTitle = String(heroImage).includes("/heroes/");
  const headings = useMemo(() => {
    const matches = [...String(bodyHtml).matchAll(/<h2[^>]*>(.*?)<\/h2>/gi)];
    return matches.map((match) => {
      const label = match[1].replace(/<[^>]+>/g, "");
      return { id: slugify(label), label };
    });
  }, [bodyHtml]);

  const [activeId, setActiveId] = useState(headings[0]?.id || "");

  const enhancedHtml = useMemo(
    () => structureBodyHtml(bodyHtml),
    [bodyHtml],
  );

  useEffect(() => {
    if (!headings.length) return undefined;

    const elements = headings
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.4, 0.7] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  return (
    <section className="article-main">
      <div className="_container">
        <div className="article-main__panel">
          {heroIncludesTitle ? (
            <div className="article-hero article-hero--framed">
              <img src={heroImage} alt="" width={1256} height={300} />
              <h1 className="visually-hidden">{title}</h1>
            </div>
          ) : (
            <div
              className="article-hero"
              style={{ backgroundImage: `url(${heroImage})` }}
            >
              <h1>{title}</h1>
            </div>
          )}

          <div className="article-layout">
            <aside className="article-sidebar">
              <div className="article-meta">
                <div className="article-meta__item">
                  <img
                    src="/images/resources/icon-calendar.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <span>{date}</span>
                </div>
                <div className="article-meta__item">
                  <img
                    src="/images/resources/icon-clock.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <span>{readTime}</span>
                </div>
              </div>

              {headings.length > 0 && (
                <nav className="article-toc" aria-label="Table of content">
                  <p className="article-toc__title">Table of content</p>
                  <ul>
                    {headings.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={
                            item.id === activeId ? "is-active" : undefined
                          }
                          onClick={() => setActiveId(item.id)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              <div className="article-share">
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
            </aside>

            <div className="article-content-col">
              <div className="article-body">
                <div
                  className="article-body__content"
                  dangerouslySetInnerHTML={{ __html: enhancedHtml }}
                />
                <ChatButton />
              </div>

              <div className="article-insights">
                <div className="article-insights__copy">
                  <h2>More Insights</h2>
                  <p>
                    Looking for more practical crypto marketing strategies?
                    Explore our latest articles and expert insights.
                  </p>
                </div>
                <Link href="/resources" className="article-insights__cta">
                  <span>Back to Resources</span>
                  <span className="article-insights__cta-icon" aria-hidden="true">
                    <img
                      src="/images/header/arrow-white.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </span>
                </Link>
                <div className="article-insights__visual" aria-hidden="true">
                  <img
                    src="/images/resources/insights-visual.png"
                    alt=""
                    width={376}
                    height={255}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleMain;
