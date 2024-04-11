"use client";
import Link from "next/link";
import React from "react";
import { RevealWrapper, RevealList } from "next-reveal";
import Image from "next/image";

function SingleServiceHero() {
  return (
    <section className="service-hero">
      <RevealList
        origin="bottom"
        interval={0}
        delay={0}
        className="images-wrap"
      >
        <div className="image-container">
          <Image
            src={"/images/single-service/service-hero.webp"}
            width={816}
            height={470}
          />
        </div>
        <div className="image-container">
          <Image
            src={"/images/single-service/service-hero-coins.webp"}
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
        <div className="service-hero__body">
          <RevealWrapper origin="bottom" delay={0}>
            <h1>
              How we drive <br />
              search visibility <br />
              and traffic
            </h1>
          </RevealWrapper>
          <RevealWrapper origin="bottom" delay={0}>
            <p>
              Boosting crypto project's visibility and traffic through sentiment<br />
              analysis, strategic keyword selection, and content optimization,<br />
              ensuring alignment with your audience's needs.
            </p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default SingleServiceHero;
