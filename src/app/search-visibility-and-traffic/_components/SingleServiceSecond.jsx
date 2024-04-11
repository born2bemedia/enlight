"use client";
import React from "react";
import { RevealWrapper, RevealList } from "next-reveal";

function SingleServiceSecond() {
  return (
    <section className="service-second">
      <div className="_container">
        <RevealWrapper origin="bottom">
          <h2>
            Challenges in attracting <br />
            traffic to crypto projects
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
            <h4>
              Tough <br />
              Competition
            </h4>
            <p>
              There are so many projects in crypto that it's like a crowded
              room. Getting noticed online is like trying to stand out in a big
              crowd.
            </p>
          </div>
          <div>
            <span>02</span>
            <h4>
              Google's <br />
              E-A-T
            </h4>
            <p>
              E-A-T means Google wants to see that you know what you're talking
              about and that you're trustworthy. It's like getting a gold star
              from Google.
            </p>
          </div>
          <div>
            <span>03</span>
            <h4>
              Rules and <br />
              Regulations
            </h4>
            <p>
              There are rules and regulations about promoting crypto projects.
              Sometimes, these rules can make it hard to get the word out about
              your project.
            </p>
          </div>
          <div>
            <span>04</span>
            <h4>
              Rapidly <br />
              Changing
            </h4>
            <p>
              Crypto is always changing, like the weather. Keeping up with
              what's hot and what's not can be tricky.
            </p>
          </div>
          <div>
            <span>05</span>
            <h4>
              Search <br />
              Engine Rules
            </h4>
            <p>
              Google, Bing, Yandex, and other search engines keep changing rules
              about how they rank websites. So, what worked yesterday might not
              work today.
            </p>
          </div>
        </RevealList>
        <RevealWrapper origin="bottom">
          <h3>
            With years of experience in crypto SEO, we've delved into search
            engine <br />
            documentation to discern effective visibility- and traffic-driving
            strategies. <br />
            Our solutions embody the most successful practices for crypto
            projects.
          </h3>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default SingleServiceSecond;
