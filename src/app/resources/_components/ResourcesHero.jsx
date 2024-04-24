"use client";
import React from "react";
import { RevealWrapper } from "next-reveal";

function ResourcesHero() {
  return (
    <section className="resources-hero">
      <div className="_container">
        <RevealWrapper origin="bottom" delay={0}>
          <h1>
            Crypto marketing <br />
            resources
          </h1>
        </RevealWrapper>
        <RevealWrapper origin="bottom" delay={0}>
          <p>Your hub of knowledge and insights</p>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default ResourcesHero;
