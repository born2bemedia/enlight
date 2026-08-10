"use client";
import React from "react";
import { RevealList } from "next-reveal";
import Link from "next/link";
import Image from "next/image";
import ResourceCard from "./ResourceCard";

function ResourcesLoop() {
  return (
    <section className="resources-loop">
      <div className="_container">
        <RevealList
          origin="bottom"
          interval={0}
          className="resources-loop__body"
        >
          <div className="resource-first">
            <div>
              <h2>Top mistakes to avoid when promoting your crypto project</h2>
              <p>
                Learn how to navigate the complex world of crypto marketing by
                avoiding these common mistakes. From neglecting branding to
                disregarding compliance, we explore the pitfalls hindering your
                project's success and provide expert insights on overcoming
                them.
              </p>
              <Link
                href={
                  "/resources/top-mistakes-to-avoid-when-promoting-your-crypto-project"
                }
                className="main-button"
              >
                <span>
                  Read
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18.636 15.6699L20.352 10.5199C21.852 6.02194 22.602 3.77294 21.414 2.58594C20.227 1.39894 17.978 2.14794 13.479 3.64794L8.32997 5.36394C4.69997 6.57394 2.88497 7.17994 2.36997 8.06694C2.12908 8.48152 2.0022 8.95246 2.0022 9.43194C2.0022 9.91142 2.12908 10.3824 2.36997 10.7969C2.88497 11.6849 4.69997 12.2899 8.32997 13.5009C8.77997 13.6509 9.28697 13.5429 9.62397 13.2099L15.13 7.75494C15.2023 7.67634 15.2899 7.61324 15.3874 7.56945C15.4848 7.52566 15.5901 7.5021 15.697 7.50019C15.8038 7.49827 15.9099 7.51805 16.0089 7.55831C16.1078 7.59858 16.1976 7.6585 16.2727 7.73446C16.3479 7.81041 16.4068 7.90082 16.446 8.00021C16.4852 8.0996 16.5039 8.20591 16.5008 8.31271C16.4977 8.41951 16.473 8.52457 16.4282 8.62156C16.3834 8.71854 16.3193 8.80542 16.24 8.87694L10.824 14.2429C10.6433 14.4276 10.5174 14.6587 10.4602 14.9106C10.403 15.1625 10.4168 15.4254 10.5 15.6699C11.71 19.2999 12.316 21.1159 13.203 21.6319C13.6178 21.8727 14.0889 21.9995 14.5685 21.9995C15.0481 21.9995 15.5192 21.8727 15.934 21.6319C16.821 21.1159 17.425 19.3009 18.636 15.6699Z"
                      fill="#0F0F0F"
                    />
                  </svg>
                </span>
              </Link>
            </div>
            <Image
              src={"/images/resources/article1.png"}
              width={670}
              height={540}
            />
          </div>

          <ResourceCard
            title="Competing in the <br />crypto market: <br />
                  <span>essential marketing <br />tactics</span>"
            image="article2.png"
            subtitle="Competing in the crypto market: essential marketing tactics"
            excerpt="Discover the key marketing tactics to help your crypto project stand out in a crowded market. From effective community building to strategic content creation, learn how to gain a competitive edge and maximise your project's visibility and success in crypto."
            slug="competing-in-the-crypto-market-essential-marketing-tactics"
          />
          <ResourceCard
            title="Building trust <br />in the crypto <br />community: <br />
                  <span>strategies for success</span>"
            image="article3.png"
            subtitle="Building trust in the crypto community: strategies for success"
            excerpt="Explore proven strategies for establishing trust and credibility within the crypto community. From transparent communication to reliable customer support, learn how to foster trust, build lasting relationships, and enhance the reputation of your crypto project."
            slug="building-trust-in-the-crypto-community-strategies-for-success"
          />
          <ResourceCard
            title="The ROI of <br />effective crypto <br />marketing: <br />
                  <span>what you need <br />to know</span>"
            image="article4.png"
            subtitle="The ROI of effective crypto marketing: what you need to know"
            excerpt="Discover the key factors that contribute to the success of your crypto marketing efforts. Learn how to measure and maximise your return on investment (ROI) with proven marketing strategies tailored to the crypto industry."
            slug="the-roi-of-effective-crypto-marketing-what-you-need-to-know"
          />
          <ResourceCard
            title="Navigating <br />compliance in <br />crypto marketing: <br />
                  <span>a practical guide</span>"
            image="article5.png"
            subtitle="Navigating compliance in crypto marketing: a practical guide"
            excerpt="Understand the complexities of compliance in crypto marketing and learn how to navigate them effectively. Discover practical strategies and best practices to ensure that your marketing efforts comply with regulations while maximising your project's visibility and success."
            slug="navigating-compliance-in-crypto-marketing-a-practical-guide"
          />
        </RevealList>
      </div>
    </section>
  );
}

export default ResourcesLoop;
