"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

function HomeThird() {
  const sectionRef = useRef(null);
  const blockRef = useRef(null);
  const [blockClass, setblockClass] = useState("");

  /*useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && blockRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const blockRect = blockRef.current.getBoundingClientRect();

        if (sectionRect.top >= 0) {
          // Section has not been reached, block is in default state
          setblockClass("");
        } else if (sectionRect.bottom <= window.innerHeight) {
          // Bottom of the section is at or above the bottom of the viewport
          setblockClass("is-absolute");
        } else if (
          sectionRect.top < 0 &&
          sectionRect.bottom > window.innerHeight
        ) {
          // Section is partially in view, block should be fixed
          setblockClass("is-fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);*/

  return (
    <section className="home-third" ref={sectionRef}>
      <div className="_container">
        <div className="home-third__body">
          <div className="home-third__col-01">
            <h2 className="mobile-header">
              Enlight builds marketing for crypto projects on:
            </h2>
            <div className={`fixed-block ${blockClass}`} ref={blockRef}>
              <h2>Enlight builds marketing for crypto projects on:</h2>
              <div className="image-wrap">
                <div>
                  <Image
                    style={{
                      animation: `floatAnimation 5s infinite ease-in-out`,
                      animationDelay: "0s",
                    }}
                    src={"/images/home/home-third.webp"}
                    width={472}
                    height={528}
                    alt="home-third"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="home-third__col-02">
            <div className="column">
              <div>
                <h3>01</h3>
                <h4>Target Market Analysis and Influencer Selection</h4>
                <ul>
                  <li>Thorough analysis of target market demographics and preferences</li>
                  <li>Identification and engagement of influential figures and crypto experts</li>
                  <li>Selection of reputable media platforms for maximum impact</li>
                </ul>
                <Image quality={100} src={"/images/home/project1.png"} width={588} height={350} alt="project1"/>
              </div>
              <div>
                <h3>02</h3>
                <h4>
                Tailored Content Strategy
                </h4>
                <ul>
                  <li>The practical content strategy should be aligned with project goals and audience interests</li>
                  <li>Creation of effective, data-driven and context-relevant content to engage target audiences</li>
                  <li>Integration of SEO best practices to comply with search engine requirements, enhance visibility and reach</li>
                </ul>
                <Image quality={100} src={"/images/home/project2.png"} width={588} height={350} alt="project2"/>
              </div>
              <div>
                <h3>03</h3>
                <h4>Compliance Assurance</h4>
                <ul>
                  <li>Comprehensive adherence to regulatory requirements and industry standards in content creation and advertising creatives</li>
                  <li>Implementation of measures to ensure transparency and legal compliance</li>
                  <li>Safeguarding brand reputation through ethical marketing practices</li>
                </ul>
                <Image quality={100} src={"/images/home/project3.png"} width={588} height={350} alt="project3"/>
              </div>
              <div>
                <h3>04</h3>
                <h4>
                Guest Posting on Trusted Media
                </h4>
                <ul>
                  <li>Strategic placement of content on reputable niche media platforms</li>
                  <li>Cultivation of brand authority and thought leadership within the crypto space</li>
                  <li>Leveraging guest posting opportunities for enhanced visibility and credibility</li>
                </ul>
                <Image quality={100} src={"/images/home/project4.png"} width={588} height={350} alt="project4"/>
              </div>
              <div>
                <h3>05</h3>
                <h4>Results Analysis and Strategy Optimization</h4>
                <ul>
                  <li>In-depth analysis of campaign performance metrics and KPIs</li>
                  <li>Iterative optimization of marketing strategies based on data-driven insights</li>
                  <li>Intuitive dashboard for visualising and simplifying campaign analysis and optimization processes, enabling seamless integration of all marketing channels for enhanced efficiency and effectiveness.</li>
                </ul>
                <Image quality={100} src={"/images/home/project5.png"} width={588} height={350} alt="project5"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeThird;
