import React from "react";
import "@/public/scss/single-service.scss";
import "@/public/scss/team.scss";
import SingleServiceLast from "@/src/component/single-service/SingleServiceLast";
import TeamHero from "./_components/TeamHero";
import TeamSecond from "./_components/TeamSecond";

export const metadata = {
  title: "Team | Enlight",
  description: "Join a day in the life of our team.",
};

function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamSecond />
      <SingleServiceLast
        title={`Ready to experience the difference with Enlight?`}
        buttonText="Get Assistance"
        image="/images/team/cta-visual.png"
        compactButton
      />
    </>
  );
}

export default TeamPage;
