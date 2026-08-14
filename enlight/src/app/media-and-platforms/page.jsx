import React from "react";
import "@/public/scss/single-service.scss";
import "@/public/scss/media-and-platforms.scss";
import SingleServiceHero from "@/src/component/single-service/SingleServiceHero";
import SingleServiceLast from "@/src/component/single-service/SingleServiceLast";
import MediaPlatforms from "./_components/MediaPlatforms";

export const metadata = {
  title: "Media and Platforms | Enlight",
  description:
    "Explore audience reach and engagement across 50+ advertising platforms and media channels.",
};

function MediaAndPlatforms() {
  return (
    <>
      <SingleServiceHero
        title={`Where we promote<br />your project`}
        subtitle={`Explore audience reach and engagement.`}
        image={`/images/media-and-platforms/hero-visual.png`}
        flipVisual
        visualSize="xl"
        sectionClass="media-hero"
      />
      <MediaPlatforms />
      <SingleServiceLast
        title={`Access top crypto media and advertising networks now!`}
        buttonText="Contact Us"
        image="/images/media-and-platforms/cta-visual.png"
        compactButton
      />
    </>
  );
}

export default MediaAndPlatforms;
