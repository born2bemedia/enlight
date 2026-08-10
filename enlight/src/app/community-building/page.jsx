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

function SingleService() {
  return (
    <>
      <SingleServiceHero
        title={`How we <br/>build crypto <br/>communities`}
        subtitle={`Strategic community-building initiatives, maximising engagement <br/>and outreach across various platforms and channels.`}
        image={`service-hero-coins.webp`}
      />
      <SingleServiceSecond
        title={`Crypto community <br />establishment challenges`}
        subtitle={`That is why we have developed solutions to address these <br />
            challenges, fostering engagement and growth.`}
        challenges={communityBuildingChallanges}
      />
      <SingleServiceThird
        title={`Our community building services <br />encompass but are not limited to`}
        items={communityBuildingServices}
      />
      <SingleServiceFourth results={communityBuildingResults} />
      <SingleServiceLast
        title={`Let us talk about <br/>community building for <br/>your crypto project`}
      />
    </>
  );
}

export default SingleService;
