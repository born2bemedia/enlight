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

export const metadata = {
  title: "Reputation, Experience and Expertise | Enlight",
  description:
    "Establishing and showcasing your project's credibility, expertise, and authority in the crypto community through strategic partnerships, expert content creation, and targeted outreach.",
};

function SingleService() {
  return (
    <>
      <SingleServiceHero
        title={`How we establish reputation,<br />experience, and expertise`}
        subtitle={`Establishing and showcasing your project's credibility, expertise, and authority in the crypto community through strategic partnerships, expert content creation, and targeted outreach.`}
        image={`reputation/hero-visual.png`}
        flipVisual
        visualSize="lg"
        wide
      />
      <SingleServiceSecond
        title={`What you need to know about reputation and expertise in marketing`}
        subtitle={`For effective Crypto PR, grasping the nuances of each factor is crucial to avoid overoptimization and potential search engine penalties. Plus, staying compliant with evolving regulations is essential. But don't worry; we will handle all of that for you.`}
        challenges={reputationChallenges}
        layout="split"
      />
      <SingleServiceThird
        title={`Our PR and Expertise services<br />for crypto projects`}
        items={reputationServices}
      />
      <SingleServiceFourth results={reputationResults} />
      <SingleServiceLast
        title={`Let us talk about reputation and expertise for your crypto project`}
        buttonText="Contact Enlight PR expert"
        image="/images/single-service/reputation/cta-visual.png"
        visualSize="lg"
      />
    </>
  );
}

export default SingleService;
