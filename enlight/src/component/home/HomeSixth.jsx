"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const challenges = [
  {
    title: "Low Brand Awareness",
    text: "Media placements, influencer partnerships and strategic content distribution.",
    icon: "/images/home/challenges/icon-1.svg",
    offset: 0,
  },
  {
    title: "Audience Scepticism",
    text: "Authority-building content, trust signals and reputation management.",
    icon: "/images/home/challenges/icon-2.png",
    offset: 40,
  },
  {
    title: "Limited Organic Traffic",
    text: "SEO optimisation, search visibility and content marketing.",
    icon: "/images/home/challenges/icon-3.png",
    offset: 80,
  },
  {
    title: "Weak Community Engagement",
    text: "Community growth campaigns, audience nurturing and engagement strategies.",
    icon: "/images/home/challenges/icon-4.png",
    offset: 120,
  },
  {
    title: "Inefficient Marketing Spend",
    text: "Performance analysis, channel optimisation and budget allocation.",
    icon: "/images/home/challenges/icon-5.png",
    offset: 80,
  },
  {
    title: "Poor Campaign Visibility",
    text: "Centralised reporting, KPI tracking and marketing analytics.",
    icon: "/images/home/challenges/icon-6.png",
    offset: 40,
  },
];

const slickSettings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
  cssEase: "linear",
  arrows: false,
  dots: false,
  pauseOnHover: true,
  swipeToSlide: true,
};

function HomeSixth() {
  return (
    <section className="home-challenges">
      <div className="_container">
        <h2>Challenges We Help Overcome</h2>
      </div>

      <div className="home-challenges__carousel">
        <Slider {...slickSettings}>
          {challenges.map((item) => (
            <div
              className="home-challenges__slide"
              key={item.title}
              style={{ width: 340 }}
            >
              <article
                className="home-challenges__card"
                style={{ marginTop: item.offset }}
              >
                <img
                  className="home-challenges__icon"
                  src={item.icon}
                  alt=""
                  width={40}
                  height={40}
                />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default HomeSixth;
