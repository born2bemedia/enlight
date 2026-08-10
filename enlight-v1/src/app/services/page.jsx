import React from "react";
import "@/public/scss/services.scss";
import ServicesHero from "./_components/ServicesHero";
import ServicesSecond from "./_components/ServicesSecond";
import ServicesThird from "./_components/ServicesThird";

function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesSecond />
      <ServicesThird />
    </>
  );
}

export default ServicesPage;
