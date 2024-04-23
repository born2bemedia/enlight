import React from "react";
import "@/public/scss/team.scss";
import "@/public/scss/single-service.scss";
import SingleServiceLast from "@/src/component/single-service/SingleServiceLast";
import TeamHero from "./_components/TeamHero";
import TeamSecond from "./_components/TeamSecond";

function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamSecond />
      <SingleServiceLast
        title={`Ready to experience <br/>the difference <br/>with Enlight?`}
        buttonText={`Get Assistance`}
      />
    </>
  );
}

export default TeamPage;
