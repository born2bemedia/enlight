"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import FormPopup from "@/src/component/FormPopup";

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRef = useRef([]);
  const [popupOpened, setPopupOpened] = useState(false);

  const handlePopup = () => {
    setPopupOpened(!popupOpened);
  };

  useEffect(() => {
    setOpenIndex(null);
    contentRef.current = contentRef.current.slice(0, 5);
  }, []);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="accordion">
        <div
          data-id={openIndex}
          className={`accordion__item ${openIndex === 1 ? "opened" : ""}`}
          
        >
          <div className="accordion__title" onClick={() => toggleItem(1)}>
            <h4 className="accordion__title-text">
              No website, no social networks, and limited project visibility.
            </h4>

            <img src="/images/green-arrow.svg" alt="^" />
          </div>
          <div
            className="accordion__content"
            ref={(el) => (contentRef.current[1] = el)}
            style={{
              maxHeight:
                openIndex === 1
                  ? `${contentRef.current[1]?.scrollHeight}px`
                  : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            <div>
              <h5>
                Branding + Community Building + Search Visibility and Traffic
              </h5>
              <p>
                <strong>The solution includes:</strong>
              </p>
              <ul>
                <li>
                  Developing a strong brand identity to establish credibility
                  and trustworthiness.
                </li>
                <li>
                  Creating basic social media profiles to engage with the
                  community and build an online presence.
                </li>
                <li>
                  Implementing basic SEO strategies to ensure potential users
                  can discover the project.
                </li>
              </ul>
              <button onClick={() => handlePopup()} className="main-button">
                <span>
                  Let's Chat with Enlight Experts
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
              </button>
            </div>
          </div>
        </div>
        <div
          data-id={openIndex}
          className={`accordion__item ${openIndex === 2 ? "opened" : ""}`}
          
        >
          <div className="accordion__title" onClick={() => toggleItem(2)}>
            <h4 className="accordion__title-text">
              Basic website and social media accounts, facing challenges in
              attracting organic traffic and reaching the audience.
            </h4>

            <img src="/images/green-arrow.svg" alt="^" />
          </div>
          <div
            className="accordion__content"
            ref={(el) => (contentRef.current[2] = el)}
            style={{
              maxHeight:
                openIndex === 2
                  ? `${contentRef.current[2]?.scrollHeight}px`
                  : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            <div>
              <h5>
                Community Building + Search Visibility and Traffic + Reputation,
                Experience, and Expertise
              </h5>
              <p>
                <strong>The solution includes:</strong>
              </p>
              <ul>
                <li>
                  Enhancing SEO efforts to improve organic visibility and
                  attract traffic to the website and social media profiles.
                </li>
                <li>
                  Expanding social media engagement efforts to increase audience
                  interaction and participation.
                </li>
                <li>
                  Showcasing project achievements, expertise, and experience to
                  build trust and credibility with the audience.
                </li>
              </ul>
              <button onClick={() => handlePopup()} className="main-button">
                <span>
                  Let's Chat with Enlight Experts
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
              </button>
            </div>
          </div>
        </div>
        <div
          data-id={openIndex}
          className={`accordion__item ${openIndex === 3 ? "opened" : ""}`}
          
        >
          <div className="accordion__title" onClick={() => toggleItem(3)}>
            <h4 className="accordion__title-text">
              Established website and social media presence with moderate
              traffic and subscribers but low engagement.
            </h4>

            <img src="/images/green-arrow.svg" alt="^" />
          </div>
          <div
            className="accordion__content"
            ref={(el) => (contentRef.current[3] = el)}
            style={{
              maxHeight:
                openIndex === 3
                  ? `${contentRef.current[3]?.scrollHeight}px`
                  : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            <div>
              <h5>
                Community Building + Reputation, Experience, and Expertise +
                Branding
              </h5>
              <p>
                <strong>The solution includes:</strong>
              </p>
              <ul>
                <li>
                  Increasing content quality and frequency to enhance user
                  engagement and activity levels.
                </li>
                <li>
                  Targeted campaigns to foster deeper connections and increase
                  community engagement.
                </li>
                <li>
                  Refining brand messaging and visuals to ensure consistency and
                  resonance with the target audience.
                </li>
              </ul>
              <button onClick={() => handlePopup()} className="main-button">
                <span>
                  Let's Chat with Enlight Experts
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
              </button>
            </div>
          </div>
        </div>
        <div
          data-id={openIndex}
          className={`accordion__item ${openIndex === 4 ? "opened" : ""}`}
          
        >
          <div className="accordion__title" onClick={() => toggleItem(4)}>
            <h4 className="accordion__title-text">
              Active audience engagement, yet struggling to attract investments.
            </h4>

            <img src="/images/green-arrow.svg" alt="^" />
          </div>
          <div
            className="accordion__content"
            ref={(el) => (contentRef.current[4] = el)}
            style={{
              maxHeight:
                openIndex === 4
                  ? `${contentRef.current[4]?.scrollHeight}px`
                  : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            <div>
              <h5>
                Reputation, Experience, and Expertise + Community Building +
                Search Visibility and Traffic
              </h5>
              <p>
                <strong>The solution includes:</strong>
              </p>
              <ul>
                <li>
                  Highlighting project success stories, testimonials, and
                  industry recognition to instil investor confidence.
                </li>
                <li>
                  Cultivating relationships with key stakeholders and
                  influencers to expand the project's reach and credibility.
                </li>
                <li>
                  Optimising online visibility through targeted advertising
                  campaigns and strategic partnerships to attract potential
                  investors.
                </li>
              </ul>
              <button onClick={() => handlePopup()} className="main-button">
                <span>
                  Let's Chat with Enlight Experts
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
              </button>
            </div>
          </div>
        </div>
        <div
          data-id={openIndex}
          className={`accordion__item ${openIndex === 5 ? "opened" : ""}`}
          
        >
          <div className="accordion__title" onClick={() => toggleItem(5)}>
            <h4 className="accordion__title-text">
              Advanced stage with steady audience engagement and successful
              investment attraction.
            </h4>

            <img src="/images/green-arrow.svg" alt="^" />
          </div>
          <div
            className="accordion__content"
            ref={(el) => (contentRef.current[5] = el)}
            style={{
              maxHeight:
                openIndex === 5
                  ? `${contentRef.current[5]?.scrollHeight}px`
                  : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            <div>
              <h5>
                Community Building + Reputation, Experience, and Expertise +
                Branding
              </h5>
              <p>
                <strong>The solution includes:</strong>
              </p>
              <ul>
                <li>
                  Fostering a sense of belonging and loyalty within the
                  community through exclusive events, promotions, and rewards.
                </li>
                <li>
                  Positioning the project as an industry leader through thought
                  leadership content, expert interviews, and participation in
                  industry events.
                </li>
                <li>
                  Evolving the brand identity to reflect growth and maturity,
                  reinforcing key brand values and positioning in the market.
                </li>
              </ul>
              <button onClick={() => handlePopup()} className="main-button">
                <span>
                  Let's Chat with Enlight Experts
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
              </button>
            </div>
          </div>
        </div>
      </div>
      {popupOpened && <FormPopup closePopup={() => handlePopup()}/>}
    </>
  );
}

export default Accordion;
