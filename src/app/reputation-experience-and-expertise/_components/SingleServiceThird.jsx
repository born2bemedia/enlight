"use client";
import React from "react";
import { communityBuilding } from "@/src/lib/community-building";
import ServiceAccordion from "./ServiceAccordion";
import { RevealWrapper } from "next-reveal";

function SingleServiceThird() {
  return (
    <section className="service-third">
      <div className="_container">
        <RevealWrapper origin="bottom">
          <h2>
            Our community building services <br />
            encompass but are not limited to
          </h2>
        </RevealWrapper>
        <ServiceAccordion items={communityBuilding} />
      </div>
    </section>
  );
}

export default SingleServiceThird;
