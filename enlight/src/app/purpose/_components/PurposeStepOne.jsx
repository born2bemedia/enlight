"use client";

import React, { useEffect, useState } from "react";

const GOALS = [
  {
    id: "boost-brand-awareness",
    title: "Boost Brand Awareness",
    problem: "Nobody knows about your crypto project yet.",
    treatment:
      "High-impact media features, thought-leadership content, and aggressive cross-platform visibility.",
    step2Id: "brand-awareness-boost",
  },
  {
    id: "improve-reach-engagement",
    title: "Improve Reach & Engagement",
    problem:
      "You have an audience, but you are struggling to connect or spark real conversations.",
    treatment:
      "Web3 influencer (KOL) partnerships, tailored community initiatives, and interactive events.",
    step2Id: "improve-reach-engagement",
  },
  {
    id: "ensure-regulatory-adherence",
    title: "Ensure Regulatory Adherence",
    problem:
      "Navigating complex, evolving global crypto compliance is slowing you down.",
    treatment:
      "Asset audits, legal positioning for advertising standards, and licensing support.",
    step2Id: "compliance-improvement",
  },
  {
    id: "maximize-organic-search",
    title: "Maximize Organic Search & Traffic",
    problem:
      "Your website isn't getting enough high-intent traffic or organic discovery.",
    treatment:
      "Technical SEO aligned with Google’s E-E-A-T guidelines, search performance tracking, and viral loops.",
    step2Id: "maximize-organic-search",
  },
  {
    id: "centralize-performance",
    title: "Centralize Performance Visualization",
    problem:
      "You are spending money on marketing but have no clear data on what is actually working.",
    treatment:
      "Integrated custom dashboards, rigorous funnel A/B testing, and real-time ROI tracking.",
    step2Id: "purpose-step-3",
  },
];

function PurposeStepOne() {
  const [activeId, setActiveId] = useState(GOALS[0].id);

  useEffect(() => {
    const elements = GOALS.map((goal) =>
      document.getElementById(goal.id),
    ).filter(Boolean);

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const selectGoal = (goal) => {
    setActiveId(goal.id);
    const target =
      document.getElementById(goal.step2Id) ||
      document.getElementById("purpose-step-2");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="purpose-step purpose-step--one" id="purpose-step-1">
      <div className="purpose-step__panel">
        <h2>Step 1: Select Your Primary Purpose</h2>

        <div className="purpose-step__layout">
          <nav className="purpose-toc" aria-label="Primary purposes">
            <ul>
              {GOALS.map((goal) => (
                <li key={goal.id}>
                  <a
                    href={`#${goal.id}`}
                    className={goal.id === activeId ? "is-active" : undefined}
                    onClick={() => setActiveId(goal.id)}
                  >
                    {goal.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="purpose-step__cards">
            {GOALS.map((goal) => (
              <article key={goal.id} id={goal.id} className="purpose-goal-card">
                <div className="purpose-goal-card__main">
                  <h3>{goal.title}</h3>
                  <button
                    type="button"
                    className="purpose-cta"
                    onClick={() => selectGoal(goal)}
                  >
                    <span>Select this Goal</span>
                    <span className="purpose-cta__icon" aria-hidden="true">
                      <img
                        src="/images/header/arrow-white.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </span>
                  </button>
                </div>

                <div className="purpose-goal-card__side">
                  <p className="purpose-goal-card__problem">{goal.problem}</p>
                  <img
                    className="purpose-goal-card__arrow"
                    src="/images/purpose/arrow-down-green.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <div className="purpose-goal-card__treatment">
                    <p className="purpose-goal-card__treatment-title">
                      The Treatment:
                    </p>
                    <p>{goal.treatment}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PurposeStepOne;
