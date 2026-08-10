"use client";
import Link from "next/link";
import React from "react";
import { RevealWrapper, RevealList } from "next-reveal";
import Image from "next/image";

function PurposeHero() {
  return (
    <section className="purpose-hero">
      <RevealList
        origin="bottom"
        interval={0}
        delay={0}
        className="images-wrap"
      >
        <div className="image-container">
          <Image
            src={"/images/purpose/purpose-hero.webp"}
            width={816}
            height={470}
          />
        </div>
        <div className="image-container">
          <Image
            src={"/images/purpose/purpose-hero-coins.webp"}
            width={625}
            height={323}
            style={{
              animation: `floatAnimation 5s infinite ease-in-out`,
              animationDelay: "0s",
            }}
          />
        </div>
      </RevealList>
      <div className="_container">
        <div className="purpose-hero__body">
          <RevealWrapper origin="bottom" delay={0}>
            <h1>
              How we meet your <br />
              marketing goals
            </h1>
          </RevealWrapper>
          <RevealWrapper origin="bottom" delay={0}>
            <p>
              Whatever your goal, we possess the knowledge, expertise, <br />
              and technologies to drive your project to the desired results.
            </p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default PurposeHero;
