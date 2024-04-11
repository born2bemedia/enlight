"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Accordion from "./Accordion";

function ServicesSecond() {
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
    <>
      <section className="services-second" ref={sectionRef}>
        <div className="_container">
          <div className="services-second__body">
            <div className="services-second__col-01">
              <h2 className="mobile-header">
                Uncertain <br />
                where to begin?
              </h2>
              <p className="mobile-subheader">
                Let us assess your project and determine the best course of
                action. Choose the stage that best describes your project.
              </p>
              <div className={`fixed-block ${blockClass}`} ref={blockRef}>
                <h2>
                  Uncertain <br />
                  where to begin?
                </h2>
                <p>
                  Let us assess your project and determine the best course of
                  action. Choose the stage that best describes your project.
                </p>
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
                  />
                </div>
              </div>
              </div>
            </div>
            <div className="services-second__col-02">
              <Accordion />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesSecond;
