"use client";
import React from "react";
import { RevealWrapper, RevealList } from "next-reveal";
import Image from "next/image";

function TeamHero() {
  return (
    <section className="team-hero">
      <div className="_container">
        <RevealWrapper origin="bottom" delay={0}>
          <h1>How we work</h1>
        </RevealWrapper>
        <RevealWrapper origin="bottom" delay={0}>
          <h3>Join a day in the life of our team.</h3>
        </RevealWrapper>
        <RevealList
        origin="bottom"
        interval={0}
        delay={0}
        className="images-wrap"
      >
        <div className="image-container">
          <Image
            src={`/images/team/hero-coins.webp`}
            width={693}
            height={323}
            style={{
              animation: `floatAnimation 5s infinite ease-in-out`,
              animationDelay: "0s",
            }}
          />
        </div>
        <div className="image-container">
          <Image
            src={"/images/team/hero.webp"}
            width={765}
            height={470}
          />
        </div>
        
      </RevealList>
      </div>
    </section>
  );
}

export default TeamHero;
