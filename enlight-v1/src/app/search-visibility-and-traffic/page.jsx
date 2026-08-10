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

function SingleService() {
  return (
    <>
      <SingleServiceHero
        title={`How we drive <br />
        search visibility <br />
        and traffic`}
        subtitle={`Boosting crypto project's visibility and traffic through sentiment<br />
        analysis, strategic keyword selection, and content optimization,<br />
        ensuring alignment with your audience's needs.`}
        image={`service-hero-coins-search.webp`}
      />
      <SingleServiceSecond
        title={`Challenges in attracting <br />
        traffic to crypto projects`}
        subtitle={`With years of experience in crypto SEO, we've delved into search
        engine <br />
        documentation to discern effective visibility- and traffic-driving
        strategies. <br />
        Our solutions embody the most successful practices for crypto
        projects.`}
        challenges={searchVisibilityChallenges}
      />
      <SingleServiceThird
        title={`Our search visibility and traffic <br />
        services for crypto projects`}
        items={searchVisibilityServices}
      />
      <SingleServiceFourth results={searchVisibilityResults} />
      <SingleServiceLast
        title={`Let us talk about search <br />
        visibility and traffic for <br />
        your crypto project`}
      />
    </>
  );
}

export default SingleService;
