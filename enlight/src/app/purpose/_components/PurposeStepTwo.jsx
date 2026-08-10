"use client";

import React, { useEffect, useState } from "react";

const FINE_TUNES = [
  {
    id: "brand-awareness-boost",
    title: "Brand Awareness Boost",
    navLabel: "Brand Awareness Boost",
    questions: [
      {
        key: "status",
        label: "What is your project's current status?",
        type: "radio",
        options: ["Stealth / Pre-launch", "Live / Token launched"],
      },
      {
        key: "audience",
        label: "Who is your main target audience?",
        type: "radio",
        options: [
          "Retail investors & crypto traders",
          "B2B clients, institutional investors, or developers",
        ],
      },
      {
        key: "budget",
        label: "What is your estimated baseline monthly budget range?",
        type: "radio",
        options: ["Under €5,000", "€5,000 - €20,000", "€20,000+"],
      },
    ],
  },
  {
    id: "improve-reach-engagement",
    title: "Improve Reach & Engagement",
    navLabel: "Improve Reach & Engagement",
    questions: [
      {
        key: "platform",
        label: "Which platform is your primary focus right now?",
        type: "checkbox",
        options: ["Telegram/Discord", "X (Twitter)", "Multi-channel"],
      },
      {
        key: "roadblock",
        label: "What is your biggest current roadblock?",
        type: "radio",
        options: [
          "Low community activity/silent chats",
          "Finding and managing reliable crypto influencers",
        ],
      },
    ],
  },
  {
    id: "compliance-improvement",
    title: "Compliance Improvement",
    navLabel: "Compliance Improvement",
    questions: [
      {
        key: "jurisdictions",
        label: "Which jurisdictions are you most concerned about?",
        type: "radio",
        options: [
          "EU (MiCA compliance)",
          "US (SEC regulations)",
          "Global/Other",
        ],
      },
      {
        key: "assets",
        label: "What assets need compliance review?",
        type: "checkbox",
        options: [
          "Marketing copy & ad creatives",
          "Tokenomics documentation & whitepaper",
        ],
      },
    ],
  },
  {
    id: "maximize-organic-search",
    title: "Maximize Organic Search & Traffic",
    navLabel: "Maximize Organic Search & Traffic",
    questions: [
      {
        key: "tools",
        label: "What marketing tools are you currently tracking data with?",
        type: "checkbox",
        options: [
          "Google Analytics",
          "On-chain data trackers",
          "Mixpanel/Amplitude",
          "None",
        ],
      },
      {
        key: "metric",
        label: "What metric matters most to your team right now?",
        type: "radio",
        options: [
          "Cost Per Acquisition",
          "Customer Lifetime Value",
          "Pure conversion volume",
          "Other/ mix",
        ],
      },
    ],
  },
];

function PurposeStepTwo() {
  const [activeId, setActiveId] = useState(FINE_TUNES[0].id);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const elements = FINE_TUNES.map((item) =>
      document.getElementById(item.id),
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

  const setRadio = (cardId, questionKey, value) => {
    setAnswers((prev) => ({
      ...prev,
      [cardId]: { ...prev[cardId], [questionKey]: value },
    }));
  };

  const toggleCheckbox = (cardId, questionKey, value) => {
    setAnswers((prev) => {
      const current = prev[cardId]?.[questionKey] || [];
      const next = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return {
        ...prev,
        [cardId]: { ...prev[cardId], [questionKey]: next },
      };
    });
  };

  return (
    <section className="purpose-step purpose-step--two" id="purpose-step-2">
      <div className="purpose-step__panel">
        <h2>Step 2: Fine-Tune Your Goal</h2>

        <div className="purpose-step__layout">
          <nav className="purpose-toc" aria-label="Fine-tune goals">
            <ul>
              {FINE_TUNES.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={item.id === activeId ? "is-active" : undefined}
                    onClick={() => setActiveId(item.id)}
                  >
                    {item.navLabel}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="purpose-step__cards">
            {FINE_TUNES.map((card) => (
              <article key={card.id} id={card.id} className="purpose-tune-card">
                <h3>{card.title}</h3>
                <div className="purpose-tune-card__questions">
                  {card.questions.map((question, index) => (
                    <React.Fragment key={question.key}>
                      {index > 0 && (
                        <div
                          className="purpose-tune-card__divider"
                          aria-hidden="true"
                        />
                      )}
                      <div className="purpose-tune-card__block">
                        <p className="purpose-tune-card__label">
                          {question.label}
                        </p>
                        <div className="purpose-tune-card__options">
                          {question.options.map((option) => {
                            const selected =
                              question.type === "radio"
                                ? answers[card.id]?.[question.key] === option
                                : (
                                    answers[card.id]?.[question.key] || []
                                  ).includes(option);

                            return (
                              <label
                                key={option}
                                className={`purpose-option purpose-option--${question.type}${
                                  selected ? " is-selected" : ""
                                }`}
                              >
                                <input
                                  type={question.type}
                                  name={`${card.id}-${question.key}`}
                                  checked={selected}
                                  onChange={() =>
                                    question.type === "radio"
                                      ? setRadio(card.id, question.key, option)
                                      : toggleCheckbox(
                                          card.id,
                                          question.key,
                                          option,
                                        )
                                  }
                                />
                                <span className="purpose-option__control" />
                                <span className="purpose-option__text">
                                  {option}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PurposeStepTwo;
