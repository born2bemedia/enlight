import React from "react";
import "@/public/scss/single-service.scss";
import SingleServiceHero from "@/src/component/single-service/SingleServiceHero";
import SingleServiceLast from "@/src/component/single-service/SingleServiceLast";
import SingleServiceFourth from "@/src/component/single-service/SingleServiceFourth";
import SingleServiceSecond from "@/src/component/single-service/SingleServiceSecond";
import SingleServiceThird from "@/src/component/single-service/SingleServiceThird";
import {
  brandingServices,
  brandingChallenges,
  brandingResults,
} from "@/src/lib/branding";

function SingleService() {
  return (
    <>
      <SingleServiceHero
        title={`How we craft <br />your brand <br />identity`}
        subtitle={`Crafting your brand identity goes beyond mere symbols and elements; it embodies <br />
        the essence of your project, conveying persuasion and trust, reflecting your <br />
        philosophy from concept to implementation across all marketing channels.`}
        image={`service-hero-coins-branding.webp`}
      />
      <SingleServiceSecond
        title={`Common branding mistakes <br />in the crypto industry`}
        subtitle={`Enlight offers comprehensive brand packaging tailored to your needs, ensuring <br />
        consistency in design, messaging, and perception across all channels, from website <br />
        design to marketing strategies.`}
        challenges={brandingChallenges}
      />
      <SingleServiceThird
        title={`Our Branding services`}
        items={brandingServices}
      />
      <SingleServiceFourth results={brandingResults} />
      <SingleServiceLast
        title={`Let us talk about <br />branding for your <br />crypto project`}
      />
    </>
  );
}

export default SingleService;
