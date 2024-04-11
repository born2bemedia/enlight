"use client";
import React from "react";
import { searchVisibility } from "@/src/lib/searchVisibility";
import ServiceAccordion from "./ServiceAccordion";
import { RevealWrapper } from "next-reveal";

function SingleServiceThird() {
  return (
    <section className="service-third">
      <div className="_container">
        <RevealWrapper origin="bottom">
          <h2>
            Our search visibility and traffic <br />
            services for crypto projects
          </h2>
        </RevealWrapper>
        <ServiceAccordion items={searchVisibility} />
      </div>
    </section>
  );
}

export default SingleServiceThird;
