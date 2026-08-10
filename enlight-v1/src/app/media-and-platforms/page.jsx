import React from "react";
import "@/public/scss/media-and-platforms.scss";
import MediaLast from "./_components/MediaLast";
import MediaHero from "./_components/MediaHero";
import MediaPlatforms from "./_components/MediaPlatforms";

function MediaAndPlatforms() {
  return (
    <>
      <MediaHero />
      <MediaPlatforms />
      <MediaLast />
    </>
  );
}

export default MediaAndPlatforms;
