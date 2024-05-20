"use client";
import React from "react";
import { RevealList, RevealWrapper } from "next-reveal";
import Image from "next/image";

function HomeFifth() {
  return (
    <section className="home-fifth">
      <div className="_container">
        <div className="home-fifth__body">
          <RevealWrapper origin="bottom">
            <h2>
              Enlight Dashboard: Streamlining <br />
              Core Marketing Processes
            </h2>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <h3>
              In addition to crafting and implementing effective marketing
              strategies for crypto projects, we <br />provide a centralised dashboard
              that serves as a single interface for all your marketing tasks.<br />
              Enlight seamlessly synchronises your marketing efforts and helps
              track results in real time.
            </h3>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <Image quality={100} src={"/images/home/dashboard.png"} width={1140} height={600} alt="default3"/>
          </RevealWrapper>

        </div>
      </div>
    </section>
  );
}

export default HomeFifth;
