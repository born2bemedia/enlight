"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

function HomeFifth() {
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
    <section className="home-fifth" ref={sectionRef}>
      <div className="_container">
        <div className="home-fifth__body">
          <div className="home-fifth__col-01">
            <h2 className="mobile-header">
              Effectively solve key marketing problems every crypto projects
              faces
            </h2>
            <div className={`fixed-block ${blockClass}`} ref={blockRef}>
              <h2>
                Effectively solve key marketing problems every crypto projects
                faces
              </h2>
              <div className="image-wrap">
                <div>
                  <Image
                    style={{
                      animation: `floatAnimation 5s infinite ease-in-out`,
                      animationDelay: "0s",
                    }}
                    src={"/images/home/home-fifth.png"}
                    width={472}
                    height={528}
                  />
                </div>
                <div>
                  <Image
                    style={{
                      animation: `floatAnimation 5s infinite ease-in-out`,
                      animationDelay: "1s",
                    }}
                    src={"/images/home/home-fifth-coins.png"}
                    width={542}
                    height={496}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="home-fifth__col-02">
            <div className="column">
              <div>
                <h3>01</h3>
                <h4>Inefficient lead management and tracking</h4>
                <p>
                  Poor lead management hampers the conversion process, resulting
                  in missed sales opportunities and decreased revenue potential
                  for the business.
                </p>
              </div>
              <div>
                <h3>02</h3>
                <h4>
                  Difficulty tracking multiple campaigns across different
                  platforms
                </h4>
                <p>
                  Without centralised campaign tracking, businesses struggle to
                  assess the overall effectiveness of their marketing efforts,
                  leading to disjointed strategies and missed opportunities for
                  optimization.
                </p>
              </div>
              <div>
                <h3>03</h3>
                <h4>Inaccurate or delayed billing for advertising services</h4>
                <p>
                  Inaccurate billing and delayed invoicing disrupt cash flow and
                  hinder financial planning, impacting the business's ability to
                  allocate resources effectively and invest in growth
                  initiatives.
                </p>
              </div>
              <div>
                <h3>04</h3>
                <h4>
                  Inconsistent campaign execution across different channels
                </h4>
                <p>
                  Inconsistent campaign execution leads to fragmented brand
                  messaging and decreased campaign effectiveness, hindering the
                  business's ability to establish a strong and cohesive brand
                  presence.
                </p>
              </div>
              <div>
                <h3>05</h3>
                <h4>Non-specific targeting leading to lower campaign ROI</h4>
                <p>
                  Without precise audience targeting, marketing campaigns fail
                  to resonate with the intended audience, resulting in lower ROI
                  and wasted advertising spend for the business.
                </p>
              </div>
              <div>
                <h3>06</h3>
                <h4>Inefficient manual processes consuming staff time </h4>
                <p>
                  Manual processes drain valuable time and resources, reducing
                  productivity and hindering the business's ability to focus on
                  strategic initiatives and growth opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFifth;
