import React from "react";
import "@/public/scss/resources.scss";
import ResourcesHero from "./_components/ResourcesHero";
import ResourcesLoop from "./_components/ResourcesLoop";
import ResourcesLater from "./_components/ResourcesLater";

function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <ResourcesLoop />
      <ResourcesLater />
    </>
  );
}

export default ResourcesPage;
