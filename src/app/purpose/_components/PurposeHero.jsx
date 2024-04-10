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
        interval={100}
        delay={0}
        className="images-wrap-mob"
      >
        <div className="image-container">
          <Image
            src={"/images/purpose/purpose-hero-mob.png"}
            width={500}
            height={250}
          />
        </div>
        <div
          className="image-container"
          style={{
            animation: `floatAnimation 5s infinite ease-in-out`,
            animationDelay: "0s",
          }}
        >
          <Image
            src={"/images/purpose/coin-mobile1.png"}
            width={500}
            height={250}
          />
        </div>
        <div
          className="image-container"
          style={{
            animation: `floatAnimation 5s infinite ease-in-out`,
            animationDelay: "0s",
          }}
        >
          <Image
            src={"/images/purpose/coin-mobile2.png"}
            width={500}
            height={250}
          />
        </div>
      </RevealList>

      <RevealList
        origin="bottom"
        interval={100}
        delay={0}
        className="images-wrap"
      >
        <div className="image-container">
          <Image
            src={"/images/purpose/purpose-hero.png"}
            width={770}
            height={550}
          />
        </div>
        <div
          className="image-container"
          style={{
            animation: `floatAnimation 5s infinite ease-in-out`,
            animationDelay: "1s",
          }}
        >
          <Image src={"/images/purpose/coin1.png"} width={250} height={250} />
        </div>

        <div
          className="image-container"
          style={{
            animation: `floatAnimation 5s infinite ease-in-out`,
            animationDelay: "2s",
          }}
        >
          <Image src={"/images/purpose/coin2.png"} width={150} height={150} />
        </div>
        <div
          className="image-container"
          style={{
            animation: `floatAnimation 5s infinite ease-in-out`,
            animationDelay: "3s",
          }}
        >
          <Image src={"/images/purpose/coin3.png"} width={160} height={160} />
        </div>

        <div
          className="image-container"
          style={{
            animation: `floatAnimation 5s infinite ease-in-out`,
            animationDelay: "3s",
          }}
        >
          <Image src={"/images/purpose/coin4.png"} width={200} height={200} />
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
