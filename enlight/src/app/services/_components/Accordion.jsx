"use client";

import React, { useState } from "react";
import FormPopup from "@/src/component/FormPopup";

const ITEMS = [
  {
    title: "No website, no social networks, and limited project visibility.",
    solution: "Branding + Community Building + Search Visibility and Traffic",
    includes: [
      "Developing a strong brand identity to establish credibility and trustworthiness.",
      "Creating basic social media profiles to engage with the community and build an online presence.",
      "Implementing basic SEO strategies to ensure potential users can discover the project.",
    ],
  },
  {
    title:
      "Basic website and social media accounts, facing challenges in attracting organic traffic and reaching the audience.",
    solution:
      "Community Building + Search Visibility and Traffic + Reputation, Experience, and Expertise",
    includes: [
      "Enhancing SEO efforts to improve organic visibility and attract traffic to the website and social media profiles.",
      "Expanding social media engagement efforts to increase audience interaction and participation.",
      "Showcasing project achievements, expertise, and experience to build trust and credibility with the audience.",
    ],
  },
  {
    title:
      "Established website and social media presence with moderate traffic and subscribers but low engagement.",
    solution:
      "Community Building + Reputation, Experience, and Expertise + Branding",
    includes: [
      "Increasing content quality and frequency to enhance user engagement and activity levels.",
      "Targeted campaigns to foster deeper connections and increase community engagement.",
      "Refining brand messaging and visuals to ensure consistency and resonance with the target audience.",
    ],
  },
  {
    title: "Active audience engagement, yet struggling to attract investments.",
    solution:
      "Reputation, Experience, and Expertise + Community Building + Search Visibility and Traffic",
    includes: [
      "Highlighting project success stories, testimonials, and industry recognition to instil investor confidence.",
      "Cultivating relationships with key stakeholders and influencers to expand the project's reach and credibility.",
      "Optimising online visibility through targeted advertising campaigns and strategic partnerships to attract potential investors.",
    ],
  },
  {
    title:
      "Advanced stage with steady audience engagement and successful investment attraction.",
    solution:
      "Community Building + Reputation, Experience, and Expertise + Branding",
    includes: [
      "Fostering a sense of belonging and loyalty within the community through exclusive events, promotions, and rewards.",
      "Positioning the project as an industry leader through thought leadership content, expert interviews, and participation in industry events.",
      "Evolving the brand identity to reflect growth and maturity, reinforcing key brand values and positioning in the market.",
    ],
  },
];

function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const [popupOpened, setPopupOpened] = useState(false);

  const toggleItem = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <>
      <div className="services-accordion">
        {ITEMS.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.title}
              className={`services-accordion__item${isOpen ? " is-open" : ""}`}
            >
              <button
                type="button"
                className="services-accordion__trigger"
                aria-expanded={isOpen}
                onClick={() => toggleItem(index)}
              >
                <span className="services-accordion__title">{item.title}</span>
                <span className="services-accordion__toggle" aria-hidden="true">
                  <span className="services-accordion__toggle-icon">
                    <img
                      src="/images/services/chevron-dark.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </span>
                </span>
              </button>

              <div
                className="services-accordion__panel"
                hidden={!isOpen}
              >
                <div className="services-accordion__body">
                  <div className="services-accordion__main">
                    <img
                      className="services-accordion__icon"
                      src="/images/services/accordion-icon.svg"
                      alt=""
                      width={40}
                      height={40}
                    />
                    <p className="services-accordion__solution">
                      {item.solution}
                    </p>
                    <button
                      type="button"
                      className="services-accordion__cta"
                      onClick={() => setPopupOpened(true)}
                    >
                      <span>Let&apos;s Chat with Enlight Experts</span>
                      <span
                        className="services-accordion__cta-icon"
                        aria-hidden="true"
                      >
                        <img
                          src="/images/header/arrow-white.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </span>
                    </button>
                  </div>

                  <div className="services-accordion__side">
                    <p className="services-accordion__side-title">
                      The solution includes:
                    </p>
                    <ul>
                      {item.includes.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {popupOpened && (
        <FormPopup
          popupTitle="Let's Chat with Enlight Experts"
          closePopup={() => setPopupOpened(false)}
        />
      )}
    </>
  );
}

export default Accordion;
