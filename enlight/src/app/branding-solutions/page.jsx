import React from "react";
import "@/public/scss/single-service.scss";
import "@/public/scss/branding.scss";
import SingleServiceHero from "@/src/component/single-service/SingleServiceHero";
import SingleServiceLast from "@/src/component/single-service/SingleServiceLast";
import SingleServiceFourth from "@/src/component/single-service/SingleServiceFourth";
import BrandingBody from "./_components/BrandingBody";
import { brandingResults } from "@/src/lib/branding";

export const metadata = {
  title: "Branding Solutions | Enlight",
  description:
    "Crafting your brand identity beyond symbols and elements — conveying persuasion and trust across all marketing channels.",
};

function BrandingSolutions() {
  return (
    <>
      <SingleServiceHero
        title={`How we craft<br />your brand<br />identity`}
        subtitle={`Crafting your brand identity goes beyond mere symbols and elements; it embodies the essence of your project, conveying persuasion and trust, reflecting your philosophy from concept to implementation across all marketing channels.`}
        image={`branding/hero-visual.png`}
        flipVisual
        visualSize="lg"
        wide
        sectionClass="branding-hero"
      />
      <BrandingBody />
      <SingleServiceFourth
        title="Results you can get"
        results={brandingResults}
      />
      <SingleServiceLast
        title={`Let us talk about branding for your crypto project`}
        buttonText="Contact Enlight branding expert"
        image="/images/single-service/branding/cta-visual.png"
        visualSize="lg"
      />
    </>
  );
}

export default BrandingSolutions;
