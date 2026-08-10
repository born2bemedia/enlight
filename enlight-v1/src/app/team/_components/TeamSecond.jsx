"use client";
import React from "react";
import { RevealWrapper, RevealList } from "next-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TeamSecond() {
  const slickSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "64px",
        },
      },
    ],
  };

  return (
    <section className="team-second">
      <div className="_container">
        <RevealWrapper origin="bottom" delay={0}>
          <h2>
            Our day begins, not with <br />
            coffee, but with...
          </h2>
        </RevealWrapper>

        <Slider className="times-slider" {...slickSettings}>
          <div>
            <div className="time-wrap">
              <div className="time-top">6:30 AM</div>
              <div className="time-bottom">
                <h3>Rise and Shine</h3>
                <p>
                  Our experts start the day by catching up on the latest crypto
                  news, events, and market changes, ensuring we're always ahead.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="time-wrap">
              <div className="time-top">7:30 AM</div>
              <div className="time-bottom">
                <h3>Data Dive</h3>
                <p>
                  We analyse data, check our customers' performance, gather
                  insights, and prepare detailed reports.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="time-wrap">
              <div className="time-top">8:30 AM</div>
              <div className="time-bottom">
                <h3>Brainstorming Brilliance</h3>
                <p>
                  It's time for brainstorming sessions, meetings, and
                  discussions about opportunities, achievements, and
                  optimizations for our valued clients.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="time-wrap">
              <div className="time-top">9:00 AM</div>
              <div className="time-bottom">
                <h3>Customer Connection</h3>
                <p>
                  We reach out to our customers, sharing their success data and
                  ensuring they're always in the loop.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="time-wrap">
              <div className="time-top">10:00 AM</div>
              <div className="time-bottom">
                <h3>Customer Communications</h3>
                <p>
                  We engage with our customers, discussing their achievements,
                  addressing their concerns, and ensuring their satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="time-wrap">
              <div className="time-top">12:00 PM</div>
              <div className="time-bottom">
                <h3>Coffee Break Brainstorm</h3>
                <p>
                  A quick coffee break fuels our team's creativity as we share
                  insights from customer feedback and communications.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="time-wrap">
              <div className="time-top">12:30 PM</div>
              <div className="time-bottom">
                <h3>Marketing Magic</h3>
                <p>
                  We work our marketing magic, developing and optimising
                  campaigns to drive client results.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="time-wrap">
              <div className="time-top">3:30 PM</div>
              <div className="time-bottom">
                <h3>Bug Tracking</h3>
                <p>
                  We meticulously monitor our campaigns, ensuring everything
                  runs smoothly and addressing issues.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="time-wrap">
              <div className="time-top">4:30 PM</div>
              <div className="time-bottom">
                <h3>Insights and Reporting</h3>
                <p>
                  We gather insights and prepare detailed reports to keep our
                  customers informed and empowered.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="time-wrap">
              <div className="time-top">5:00 PM</div>
              <div className="time-bottom">
                <h3>Competitive Analysis</h3>
                <p>
                  We closely monitor our customers' competitors, monitoring
                  their marketing efforts and identifying new opportunities.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="time-wrap">
              <div className="time-top">6:00 PM</div>
              <div className="time-bottom">
                <h3>Evening Brainstorm</h3>
                <p>
                  We wrap up the day with a final brainstorming session, sharing
                  insights and planning for tomorrow's success.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="time-wrap">
              <div className="time-top">6:30 PM</div>
              <div className="time-bottom">
                <h3>Campaign Check-In</h3>
                <p>
                  We ensure everything is running smoothly with our campaigns,
                  providing round-the-clock support for our customers.
                </p>
              </div>
            </div>
          </div>
        </Slider>

        <RevealWrapper origin="bottom" delay={0}>
          <h5>
            At most companies, the workday ends at 7:00 PM. But for our team,
            the pursuit <br />
            of excellence never stops. We're always searching for new
            opportunities, networking across <br />
            time zones, and delivering the best results for our clients.
          </h5>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default TeamSecond;
