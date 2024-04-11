"use client";
import React from "react";
import { RevealWrapper, RevealList } from "next-reveal";

function SingleServiceSecond() {
  return (
    <section className="service-second">
      <div className="_container">
        <RevealWrapper origin="bottom">
          <h2>
            Crypto community <br />
            establishment challenges
          </h2>
        </RevealWrapper>
        <RevealList
          origin="bottom"
          interval={0}
          delay={0}
          className="service-second__body"
        >
          <div>
            <span>01</span>
            <h4>Trust Barriers</h4>
            <p>
              Addressing doubts and earning trust from community members who
              might be cautious due to scams or misinformation in the crypto
              industry.
            </p>
          </div>
          <div>
            <span>02</span>
            <h4>High Competition</h4>
            <p>
              Dealing with a crowded space where many projects are trying to
              grab people's attention makes it hard for us to get noticed and
              build a dedicated audience.
            </p>
          </div>
          <div>
            <span>03</span>
            <h4>Market Saturation</h4>
            <p>
              Facing a crowded market filled with information overload, making
              it hard to grab and maintain community attention amidst the noise.
            </p>
          </div>
          <div>
            <span>04</span>
            <h4>Search Visibility</h4>
            <p>
              Struggling with low visibility on search engines, hindering the
              project's ability to attract organic traffic and establish
              credibility in the online space.
            </p>
          </div>
        </RevealList>
        <RevealWrapper origin="bottom">
          <h3>
            That is why we have developed solutions to address these <br />
            challenges, fostering engagement and growth.
          </h3>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default SingleServiceSecond;
