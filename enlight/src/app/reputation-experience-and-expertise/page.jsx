import React from "react";
import "@/public/scss/single-service.scss";
import SingleServiceHero from "@/src/component/single-service/SingleServiceHero";
import SingleServiceLast from "@/src/component/single-service/SingleServiceLast";
import SingleServiceFourth from "@/src/component/single-service/SingleServiceFourth";
import SingleServiceSecond from "@/src/component/single-service/SingleServiceSecond";
import SingleServiceThird from "@/src/component/single-service/SingleServiceThird";
import {
  reputationServices,
  reputationChallenges,
  reputationResults,
} from "@/src/lib/reputation";

function SingleService() {
  return (
    <>
      <SingleServiceHero
        classLabel={"reputation"}
        title={`How we establish <br />reputation, experience, <br />and expertise`}
        subtitle={`Establishing and showcasing your project's credibility, expertise, and <br />
        authority in the crypto community through strategic partnerships, <br />
        expert content creation, and targeted outreach.`}
        image={`service-hero-coins-reputation.webp`}
      />
      <SingleServiceSecond
        title={`What you need to know about <br />reputation and expertise in marketing`}
        subtitle={`For effective Crypto PR, grasping the nuances of each factor is crucial to avoid <br />
        overoptimization and potential search engine penalties. Plus, staying compliant with <br />
        evolving regulations is essential. But don't worry; we will handle all of that for you.`}
        challenges={reputationChallenges}
      />
      <SingleServiceThird
        title={`Our PR and Expertise services <br />for crypto projects`}
        items={reputationServices}
      />
      <SingleServiceFourth results={reputationResults} />
      <SingleServiceLast
        title={`Let us talk about <br />
        reputation and expertise <br />
        for your crypto project`}
      />
    </>
  );
}

export default SingleService;
