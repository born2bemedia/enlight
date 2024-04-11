import React from "react";
import "@/public/scss/single-service.scss";
import SingleServiceHero from "./_components/SingleServiceHero";
import SingleServiceLast from "./_components/SingleServiceLast";
import SingleServiceFourth from "./_components/SingleServiceFourth";
import SingleServiceSecond from "./_components/SingleServiceSecond";
import SingleServiceThird from "./_components/SingleServiceThird";

function SingleService() {
  return (
    <>
      <SingleServiceHero />
      <SingleServiceSecond/>
      <SingleServiceThird/>
      <SingleServiceFourth/>
      <SingleServiceLast />
    </>
  );
}

export default SingleService;
