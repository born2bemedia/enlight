import React from "react";
import "@/public/scss/single-service.scss";
import SingleServiceHero from "@/src/component/single-service/SingleServiceHero";
import SingleServiceLast from "@/src/component/single-service/SingleServiceLast";
import SingleServiceFourth from "@/src/component/single-service/SingleServiceFourth";
import SingleServiceSecond from "@/src/component/single-service/SingleServiceSecond";
import SingleServiceThird from "@/src/component/single-service/SingleServiceThird";
import {
  communityBuildingServices,
  communityBuildingChallanges,
  communityBuildingResults,
} from "@/src/lib/community-building";

export const metadata = {
  title: "Community Building | Enlight",
  description:
    "Strategic community-building initiatives, maximising engagement and outreach across various platforms and channels.",
};

function SingleService() {
  return (
    <>
      <SingleServiceHero
        title={`How we build crypto<br />communities`}
        subtitle={`Strategic community-building initiatives, maximising engagement and outreach across various platforms and channels.`}
        image={`community-building/hero-visual.png`}
        flipVisual
      />
      <SingleServiceSecond
        title={`Crypto community establishment challenges`}
        subtitle={`That is why we have developed solutions to address these challenges, fostering engagement and growth.`}
        challenges={communityBuildingChallanges}
      />
      <SingleServiceThird
        title={`Our community building services<br />encompass but are not limited to`}
        items={communityBuildingServices}
        iconBase="/images/single-service/community-building"
      />
      <SingleServiceFourth results={communityBuildingResults} />
      <SingleServiceLast
        title={`Let us talk about community building for your crypto project`}
        buttonText="Contact Enlight community expert"
        image="/images/single-service/community-building/cta-coins.png"
      />
    </>
  );
}

export default SingleService;
