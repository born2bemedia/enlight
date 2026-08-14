"use client";

import React, { useState } from "react";
import AssessmentPopup from "@/src/component/assessment/AssessmentPopup";

function HomeFifth() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  return (
    <>
      <section className="home-assessment">
        <div className="home-assessment__bg" aria-hidden="true" />

        <div className="_container">
          <div className="home-assessment__content">
            <h2>Measure Your Marketing Performance</h2>
            <p>
              Find out how your project compares across community growth,
              visibility, reputation, advertising and marketing operations.
              <br />
              Get your Crypto Marketing Health Score in under 2 minutes.
            </p>
            <button
              type="button"
              className="home-assessment__cta"
              onClick={() => setIsAssessmentOpen(true)}
            >
              <span className="home-assessment__cta-label">Start Assessment</span>
              <span className="home-assessment__cta-icon" aria-hidden="true">
                <img
                  src="/images/header/arrow-white.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </span>
            </button>
          </div>

          <div className="home-assessment__visual" aria-hidden="true">
            <img
              src="/images/home/assessment-coins.png"
              alt=""
              width={902}
              height={902}
            />
          </div>
        </div>
      </section>

      {isAssessmentOpen && (
        <AssessmentPopup onClose={() => setIsAssessmentOpen(false)} />
      )}
    </>
  );
}

export default HomeFifth;
