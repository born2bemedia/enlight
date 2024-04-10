"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

function PurposeSecond() {
  const sectionRef = useRef(null);
  const blockRef = useRef(null);
  const [blockClass, setblockClass] = useState("");

  useEffect(() => {
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
  }, []);

  return (
    <section className="purpose-second" ref={sectionRef}>
      <div className={`fixed-block ${blockClass}`} ref={blockRef}></div>
      <div className="_container">
        <RevealList
          origin="bottom"
          interval={0}
          delay={0}
          className={"purpose-second__body"}
        >
          <div className="purpose-second__row">
            <div className="left">
              <span>01</span>
              <h3>Nobody knows <br />about your <br />crypto project</h3>
            </div>
            <div className="right">
              <img src="/images/purpose/icon1.svg" />
              <h4>Boost Brand Awareness</h4>
              <p>
                By creating expert blog posts, securing mentioning in popular
                crypto media outlets, ensuring maximum media coverage and
                promoting your project through targeted social media campaigns.
              </p>
            </div>
          </div>

          <div className="purpose-second__row">
            <div className="left">
              <span>02</span>
              <h3>Struggling to <br />connect with your <br />target audience</h3>
            </div>
            <div className="right">
              <img src="/images/purpose/icon2.svg" />
              <h4>
                Improve audience reach and engagement for marketing campaigns
              </h4>
              <p>
                By conducting in-depth audience research, collaborating with
                influential figures in the crypto community for endorsements,
                and running interactive online events to foster community
                engagement.
              </p>
            </div>
          </div>

          <div className="purpose-second__row">
            <div className="left">
              <span>03</span>
              <h3>Dealing with <br />complex <br />regulations</h3>
            </div>
            <div className="right">
              <img src="/images/purpose/icon3.svg" />
              <h4>Ensure adherence to evolving crypto regulations</h4>
              <p>
                By reviewing your marketing materials for compliance, getting
                legal counsel on advertising standards, and getting assistance
                with obtaining necessary licences or certifications.
              </p>
            </div>
          </div>

          <div className="purpose-second__row">
            <div className="left">
              <span>04</span>
              <h3>Not getting <br />enough attention <br />online</h3>
            </div>
            <div className="right">
              <img src="/images/purpose/icon4.svg" />
              <h4>Boost organic reach and engagement</h4>
              <p>
                By optimising your website for search engines, creating viral
                content for social sharing, and running targeted online ad
                campaigns to reach your desired users.
              </p>
            </div>
          </div>

          <div className="purpose-second__row">
            <div className="left">
              <span>05</span>
              <h3>Unsure if your <br />marketing efforts <br />are working</h3>
            </div>
            <div className="right">
              <img src="/images/purpose/icon4.svg" />
              <h4>Visualise the performance of your marketing</h4>
              <p>
                Connect all tracking tools to monitor the performance of your
                website, marketing campaigns, and user engagement, conduct A/B
                testing on various marketing strategies and channels, and get
                real-time reports with actionable insights for improvement.
              </p>
            </div>
          </div>
        </RevealList>
      </div>
    </section>
  );
}

export default PurposeSecond;
