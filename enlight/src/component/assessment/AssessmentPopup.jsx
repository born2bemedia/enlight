"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ASSESSMENT_STEPS,
  ASSESSMENT_TITLE,
  calculateAssessmentResults,
  createEmptyAnswers,
} from "@/src/lib/assessment";
import "@/public/scss/assessment.scss";

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M15 5L5 15M5 5L15 15"
        stroke="#0F0F0F"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <img src="/images/header/arrow-white.svg" alt="" width={20} height={20} />
  );
}

function GridArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="0" y="16" width="4" height="4" fill="#97D80F" />
      <rect x="4" y="12" width="4" height="4" fill="#97D80F" />
      <rect x="8" y="8" width="4" height="4" fill="#97D80F" />
      <rect x="12" y="4" width="4" height="4" fill="#97D80F" />
      <rect x="16" y="0" width="4" height="4" fill="#97D80F" />
      <rect x="12" y="0" width="4" height="4" fill="#97D80F" />
      <rect x="8" y="0" width="4" height="4" fill="#97D80F" />
      <rect x="16" y="4" width="4" height="4" fill="#97D80F" />
      <rect x="16" y="8" width="4" height="4" fill="#97D80F" />
    </svg>
  );
}

function AssessmentOption({ question, option, checked, onChange }) {
  const inputType = question.type === "radio" ? "radio" : "checkbox";

  return (
    <label className="assessment-option">
      <input
        type={inputType}
        name={question.id}
        value={option.value}
        checked={checked}
        onChange={onChange}
      />
      <span
        className={`assessment-option__control${
          question.type === "radio" ? " is-radio" : ""
        }`}
        aria-hidden="true"
      />
      <span className="assessment-option__label">{option.label}</span>
    </label>
  );
}

function AssessmentStep({ step, stepIndex, answers, onChange }) {
  return (
    <div className="assessment-step">
      <div className="assessment-step__head">
        <p className="assessment-step__title">{step.title}</p>
        <p className="assessment-step__progress">
          step {stepIndex + 1}/{ASSESSMENT_STEPS.length}
        </p>
      </div>
      <div className="assessment-step__divider" aria-hidden="true" />
      <div
        className={`assessment-step__grid${
          step.questions.length === 3 ? " is-three" : ""
        }`}
      >
        {step.questions.map((question) => (
          <div key={question.id} className="assessment-question">
            <p className="assessment-question__label">{question.label}</p>
            <div className="assessment-question__options">
              {question.options.map((option) => {
                const currentAnswer = answers[question.id];
                const checked =
                  question.type === "radio"
                    ? currentAnswer === option.value
                    : currentAnswer.includes(option.value);

                const handleChange = () => {
                  if (question.type === "radio") {
                    onChange(question.id, option.value);
                    return;
                  }

                  const nextValues = checked
                    ? currentAnswer.filter((value) => value !== option.value)
                    : [...currentAnswer, option.value];

                  onChange(question.id, nextValues);
                };

                return (
                  <AssessmentOption
                    key={option.value}
                    question={question}
                    option={option}
                    checked={checked}
                    onChange={handleChange}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AssessmentResults({ results, onClose }) {
  return (
    <div className="assessment-results">
      <div className="assessment-results__top">
        <div className="assessment-results__summary">
          <p className="assessment-results__score">{results.totalScore}</p>
          <div className="assessment-results__copy">
            <p className="assessment-results__heading">
              Your Marketing Health Score
            </p>
            <p className="assessment-results__description">
              {results.description}
            </p>
          </div>
        </div>
        <div className="assessment-results__breakdown">
          <p className="assessment-results__risk">{results.riskLabel}</p>
          <ul className="assessment-results__categories">
            {results.categories.map((category) => (
              <li key={category.id}>
                <span>{category.label}:</span>
                <span>
                  {category.score}/{category.maxScore}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="assessment-step__divider" aria-hidden="true" />
      <div className="assessment-results__bottom">
        <div className="assessment-results__list-block">
          <p className="assessment-results__list-title">Potential risks:</p>
          <ul className="assessment-results__list">
            {results.risks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="assessment-results__list-block">
          <p className="assessment-results__list-title">How Enlight can help:</p>
          <ul className="assessment-results__list">
            {results.helpItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link
        href="/contact-us"
        className="assessment-btn assessment-btn--primary"
        onClick={onClose}
      >
        <span>Connect with Enlight</span>
        <span className="assessment-btn__icon">
          <GridArrowIcon />
        </span>
      </Link>
    </div>
  );
}

export default function AssessmentPopup({ onClose }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState(createEmptyAnswers);
  const [phase, setPhase] = useState("questions");
  const [results, setResults] = useState(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleAnswerChange = (questionId, value) => {
    setAnswers((current) => ({
      ...current,
      [questionId]: value,
    }));
  };

  const handleNext = () => {
    if (phase === "processing") {
      return;
    }

    if (stepIndex < ASSESSMENT_STEPS.length - 1) {
      setStepIndex((current) => current + 1);
      return;
    }

    setPhase("processing");

    window.setTimeout(() => {
      setResults(calculateAssessmentResults(answers));
      setPhase("results");
    }, 1200);
  };

  const handleReturn = () => {
    if (phase === "results") {
      setPhase("questions");
      setStepIndex(ASSESSMENT_STEPS.length - 1);
      return;
    }

    setStepIndex((current) => Math.max(current - 1, 0));
  };

  const currentStep = ASSESSMENT_STEPS[stepIndex];
  const isLastStep = stepIndex === ASSESSMENT_STEPS.length - 1;
  const showReturn = phase === "results" || stepIndex > 0;

  return (
    <div className="popup assessment-popup">
      <div className="overlay" onClick={onClose} aria-hidden="true" />
      <div
        className="assessment-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="assessment-title"
      >
        <div className="assessment-modal__header">
          <h2 id="assessment-title" className="assessment-modal__title">
            {ASSESSMENT_TITLE}
          </h2>
          <button
            type="button"
            className="assessment-modal__close"
            aria-label="Close assessment"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>

        {phase === "results" && results ? (
          <div className="assessment-modal__panel">
            <AssessmentResults results={results} onClose={onClose} />
          </div>
        ) : (
          <>
            <div className="assessment-modal__panel">
              <AssessmentStep
                step={currentStep}
                stepIndex={stepIndex}
                answers={answers}
                onChange={handleAnswerChange}
              />
            </div>

            <div className="assessment-modal__footer">
              {showReturn ? (
                <button
                  type="button"
                  className="assessment-btn assessment-btn--ghost"
                  onClick={handleReturn}
                >
                  Return
                </button>
              ) : (
                <span />
              )}

              <button
                type="button"
                className="assessment-btn assessment-btn--primary"
                onClick={handleNext}
                disabled={phase === "processing"}
              >
                <span>{isLastStep ? "Get Health Score" : "Next"}</span>
                <span className="assessment-btn__icon">
                  <ArrowIcon />
                </span>
              </button>
            </div>

            {phase === "processing" && (
              <p className="assessment-modal__processing">
                Your answers are being processed. Please wait….
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
