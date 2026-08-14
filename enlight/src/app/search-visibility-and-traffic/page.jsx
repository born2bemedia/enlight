import React from "react";
import "@/public/scss/single-service.scss";
import SingleServiceHero from "@/src/component/single-service/SingleServiceHero";
import SingleServiceLast from "@/src/component/single-service/SingleServiceLast";
import SingleServiceFourth from "@/src/component/single-service/SingleServiceFourth";
import SingleServiceSecond from "@/src/component/single-service/SingleServiceSecond";
import SingleServiceThird from "@/src/component/single-service/SingleServiceThird";
import {
  searchVisibilityServices,
  searchVisibilityChallenges,
  searchVisibilityResults,
} from "@/src/lib/searchVisibility";

export const metadata = {
  title: "Search Visibility and Traffic | Enlight",
  description:
    "Boosting crypto project's visibility and traffic through sentiment analysis, strategic keyword selection, and content optimization.",
};

function SingleService() {
  return (
    <>
      <SingleServiceHero
        title={`How we drive search visibility<br />and traffic`}
        subtitle={`Boosting crypto project's visibility and traffic through sentiment analysis, strategic keyword selection, and content optimization, ensuring alignment with your audience's needs.`}
        image={`search-visibility/hero-visual.png`}
        flipVisual
        visualSize="lg"
      />
      <SingleServiceSecond
        title={`Challenges in attracting traffic to crypto projects`}
        subtitle={`With years of experience in crypto SEO, we've delved into search engine documentation to discern effective visibility- and traffic-driving strategies. Our solutions embody the most successful practices for crypto projects.`}
        challenges={searchVisibilityChallenges}
        theme="green"
      />
      <SingleServiceThird
        title={`Our search visibility and traffic<br />services for crypto projects`}
        items={searchVisibilityServices}
      />
      <SingleServiceFourth results={searchVisibilityResults} theme="green" />
      <SingleServiceLast
        title={`Let us talk about search visibility and traffic for your crypto project`}
        buttonText="Contact Enlight SERM expert"
        image="/images/single-service/search-visibility/cta-visual.png"
        visualSize="lg"
      />
    </>
  );
}

export default SingleService;
