"use client";
import React from "react";
import { RevealWrapper, RevealList } from "next-reveal";
import Link from "next/link";

function MediaHero() {
  return (
    <section className="media-hero">
      <div className="_container">
        <RevealWrapper origin="bottom" delay={0}>
          <h1>
            Where we promote <br />
            your project
          </h1>
        </RevealWrapper>
        <RevealWrapper origin="bottom" delay={0}>
          <h3>
            Explore audience reach and engagement. <br />
            With Enlight, your project gains access to over 50 reputable
            advertising platforms <br />
            and media channels, reaching an audience of over 7 billion users.
          </h3>
        </RevealWrapper>
        <RevealList
          origin="bottom"
          interval={0}
          delay={0}
          className="media-hero__body"
        >
          <div className="offer">
            <img src="/images/media-and-platforms/media1.svg" />
            <h4>
              Over 50 Reputable <br />
              Advertising Networks
            </h4>
            <p>
              We've carefully chosen over 50 reputable advertising networks to
              promote your project effectively. Each has been tried and tested
              to ensure effectiveness within the crypto space.
            </p>
          </div>

          <div className="offer">
          <img src="/images/media-and-platforms/media2.svg" />
            <h4>
              Total Audience <br />
              Exceeding 7 Billion Users
            </h4>
            <p>
              The combined audience size of all our media platforms and
              advertising networks is over 7 billion users.
            </p>
          </div>

          <div className="offer">
          <img src="/images/media-and-platforms/media3.svg" />
            <h4>
              80% Average <br />
              Advertisement Reaches
            </h4>
            <p>
              On average, each advertisement reaches thousands of users across
              our platforms.
            </p>
          </div>

          <div className="offer">
          <img src="/images/media-and-platforms/media4.svg" />
            <h4>
              Global Geographical <br />
              Reach - 114 Countries
            </h4>
            <p>
              Our media platforms and advertising networks have a global reach,
              ensuring your project gets exposure worldwide. We work hard to
              expand the geography.
            </p>
          </div>
          <div className="offer">
          <img src="/images/media-and-platforms/media5.svg" />
            <h4>
              Specialised <br />
              Crypto Audience
            </h4>
            <p>
              Reach a highly targeted audience interested in cryptocurrency and
              blockchain technology through our specialised crypto advertising.
            </p>
          </div>
          <div className="offer">
          <img src="/images/media-and-platforms/media6.svg" />
            <h4>Average ROI - 23%</h4>
            <p>
              An average return on investment is about 23%, significantly higher
              than the industry average. We tailor advertising campaigns to your
              project's unique needs, ensuring maximum effectiveness and
              profitability.
            </p>
          </div>
        </RevealList>
      </div>
    </section>
  );
}

export default MediaHero;
