"use client";
import React from "react";
import { RevealList, RevealWrapper } from "next-reveal";
import Link from "next/link";

function HomeLast() {
  return (
    <section className="home-last">
      <div className="_container">
        <div className="home-last__body">
          <RevealWrapper origin="bottom">
            <h2>
              Assisting your <br />progress 
              at every turn
            </h2>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <h3>
              Our support team is readily available to help you optimise your
              use of our <br/>platform, enabling you to work efficiently and without
              interruption.
            </h3>
          </RevealWrapper>
          <RevealList
            origin="bottom"
            interval={100}
            delay={0}
            className={"home-contacts"}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="64"
                viewBox="0 0 65 64"
                fill="none"
              >
                <g clip-path="url(#clip0_9_732)">
                  <path
                    d="M60.9546 26.645C59.6769 25.8554 58.2545 25.6946 57 25.8181V24.5C57 11.0251 45.9733 0 32.5 0C19.0251 0 8 11.0267 8 24.5V25.8181C6.7455 25.6945 5.323 25.8554 4.04538 26.645C1.69275 28.099 0.5 31.1624 0.5 35.75C0.5 40.3452 1.695 43.4249 4.05188 44.9035C5.22263 45.638 6.58988 45.8931 8 45.7719V47.125C8 48.1605 8.8395 49 9.875 49H17.375C18.4105 49 19.25 48.1605 19.25 47.125V24.5C19.25 23.4645 18.4105 22.625 17.375 22.625H11.8356C12.7866 12.0589 21.6905 3.75 32.5 3.75C43.3095 3.75 52.2134 12.0589 53.1644 22.625H47.625C46.5895 22.625 45.75 23.4645 45.75 24.5V47.125C45.75 48.1605 46.5895 49 47.625 49H53.25V50.875C53.25 53.9766 50.7266 56.5 47.625 56.5H41.5525C40.7785 54.3177 38.6944 52.75 36.25 52.75H32.5C29.3984 52.75 26.875 55.2734 26.875 58.375C26.875 61.4766 29.3984 64 32.5 64H36.25C38.6944 64 40.7785 62.4323 41.5525 60.25H47.625C52.7944 60.25 57 56.0444 57 50.875C57 48.5911 57 47.2539 57 45.7718C58.4103 45.893 59.7776 45.6377 60.9481 44.9034C63.305 43.4249 64.5 40.3452 64.5 35.75C64.5 31.1624 63.3073 28.099 60.9546 26.645ZM8 41.9976C7.40175 42.1017 6.654 42.109 6.04475 41.7267C4.88738 41.0007 4.25 38.8781 4.25 35.75C4.25 32.6519 4.87313 30.5539 6.0045 29.8426C6.61625 29.458 7.387 29.4854 8 29.6064V41.9976ZM15.5 26.375V45.25H11.75V26.375H15.5ZM36.25 60.25H32.5C31.4661 60.25 30.625 59.4089 30.625 58.375C30.625 57.3411 31.4661 56.5 32.5 56.5H36.25C37.2839 56.5 38.125 57.3411 38.125 58.375C38.125 59.4089 37.2839 60.25 36.25 60.25ZM53.25 45.25H49.5V26.375H53.25V45.25ZM58.9686 41.7184C58.3626 42.1053 57.6066 42.0978 57 41.9926V29.6065C57.613 29.4855 58.3836 29.4581 58.9955 29.8428C60.1269 30.5539 60.75 32.6519 60.75 35.75C60.75 38.8654 60.1172 40.985 58.9686 41.7184Z"
                    fill="#97D80F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9_732">
                    <rect
                      width="64"
                      height="64"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h4>24/7 Support</h4>
              <p>Whenever you need it, wherever you are.</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="64"
                viewBox="0 0 65 64"
                fill="none"
              >
                <g clip-path="url(#clip0_9_735)">
                  <path
                    d="M58.7656 51.0423C59.9266 49.6369 60.625 47.836 60.625 45.875C60.625 41.3949 56.9801 37.75 52.5 37.75C48.0199 37.75 44.375 41.3949 44.375 45.875C44.375 47.836 45.0734 49.6369 46.2344 51.0423C44.749 51.6965 43.4636 52.7235 42.5 54.0065C41.5364 52.7235 40.251 51.6965 38.7656 51.0423C39.9266 49.6369 40.625 47.836 40.625 45.875C40.625 41.3949 36.9801 37.75 32.5 37.75C28.0199 37.75 24.375 41.3949 24.375 45.875C24.375 47.836 25.0734 49.6369 26.2344 51.0423C24.749 51.6965 23.4636 52.7235 22.5 54.0065C21.5364 52.7235 20.251 51.6965 18.7656 51.0423C19.9266 49.6369 20.625 47.836 20.625 45.875C20.625 41.3949 16.9801 37.75 12.5 37.75C8.01988 37.75 4.375 41.3949 4.375 45.875C4.375 47.836 5.07337 49.6369 6.23438 51.0423C2.93513 52.4954 0.625 55.7946 0.625 59.625V62.125C0.625 63.1605 1.4645 64 2.5 64H62.5C63.5355 64 64.375 63.1605 64.375 62.125V59.625C64.375 55.7946 62.0649 52.4954 58.7656 51.0423ZM52.5 41.5C54.9124 41.5 56.875 43.4626 56.875 45.875C56.875 48.2874 54.9124 50.25 52.5 50.25C50.0876 50.25 48.125 48.2874 48.125 45.875C48.125 43.4626 50.0876 41.5 52.5 41.5ZM32.5 41.5C34.9124 41.5 36.875 43.4626 36.875 45.875C36.875 48.2874 34.9124 50.25 32.5 50.25C30.0876 50.25 28.125 48.2874 28.125 45.875C28.125 43.4626 30.0876 41.5 32.5 41.5ZM12.5 41.5C14.9124 41.5 16.875 43.4626 16.875 45.875C16.875 48.2874 14.9124 50.25 12.5 50.25C10.0876 50.25 8.125 48.2874 8.125 45.875C8.125 43.4626 10.0876 41.5 12.5 41.5ZM4.375 59.625C4.375 56.5234 6.89838 54 10 54H15C18.1016 54 20.625 56.5234 20.625 59.625V60.25H4.375V59.625ZM24.375 59.625C24.375 56.5234 26.8984 54 30 54H35C38.1016 54 40.625 56.5234 40.625 59.625V60.25H24.375V59.625ZM60.625 60.25H44.375V59.625C44.375 56.5234 46.8984 54 50 54H55C58.1016 54 60.625 56.5234 60.625 59.625V60.25Z"
                    fill="#97D80F"
                  />
                  <path
                    d="M24.2865 16.3201L23.3322 21.8839C23.1459 22.9702 23.5841 24.0478 24.4759 24.6956C24.9797 25.0618 25.5694 25.2477 26.163 25.2477C26.6199 25.2477 27.0791 25.1375 27.5034 24.9145L32.5 22.2875L37.4965 24.9145C38.4724 25.4272 39.6321 25.3436 40.524 24.6956C41.4157 24.0476 41.854 22.9702 41.6676 21.8839L40.7134 16.3201L44.7556 12.3799C45.545 11.6105 45.8237 10.4814 45.4831 9.433C45.1425 8.3845 44.2532 7.63487 43.1625 7.4765L37.5761 6.66475L35.078 1.6025C34.5901 0.614 33.6022 0 32.5 0C31.3977 0 30.4099 0.614 29.922 1.6025L27.4237 6.6645L21.8375 7.47625C20.7466 7.63475 19.8574 8.38437 19.5167 9.43275C19.1761 10.4811 19.4549 11.6103 20.2442 12.3796L24.2865 16.3201ZM33.3725 18.5095C33.0994 18.366 32.7996 18.2941 32.5 18.2941C32.2004 18.2941 31.9006 18.3659 31.6275 18.5095L27.3281 20.7699L28.1492 15.9824C28.2535 15.3741 28.0519 14.7535 27.61 14.3228L24.1317 10.9323L28.9386 10.2338C29.5494 10.145 30.0772 9.7615 30.3504 9.20813L32.5 4.85238L34.6496 9.20813C34.9227 9.7615 35.4507 10.145 36.0614 10.2338L40.8682 10.9323L37.39 14.3228C36.9481 14.7535 36.7465 15.3741 36.8507 15.9824L37.6719 20.7699L33.3725 18.5095Z"
                    fill="#97D80F"
                  />
                  <path
                    d="M4.54025 23.2555L3.835 27.3671C3.66313 28.3696 4.06738 29.3636 4.89025 29.9615C5.71313 30.5591 6.7835 30.6365 7.68375 30.1634L11.3761 28.2221L15.0685 30.1634C15.4601 30.3691 15.8837 30.4709 16.3054 30.4709C16.853 30.4709 17.3971 30.2992 17.862 29.9615C18.6849 29.3636 19.0893 28.3696 18.9172 27.367L18.212 23.2555L21.1991 20.3438C21.9274 19.6339 22.1846 18.592 21.8704 17.6248C21.5561 16.6575 20.7358 15.9656 19.729 15.8193L15.6009 15.2194L13.7548 11.4786C13.3046 10.5665 12.3933 10 11.3761 10C10.359 10 9.44762 10.5665 8.99737 11.4786L7.15125 15.2194L3.02288 15.8193C2.01638 15.9656 1.196 16.6575 0.88175 17.6248C0.5675 18.592 0.82475 19.6339 1.553 20.3438L4.54025 23.2555ZM8.666 18.7886C9.27675 18.6999 9.80463 18.3164 10.0778 17.763L11.3761 15.1322L12.6745 17.763C12.9476 18.3164 13.4756 18.6999 14.0863 18.7886L16.9895 19.2105L14.8886 21.2584C14.4467 21.6891 14.2451 22.3097 14.3494 22.918L14.8453 25.8094L12.2486 24.4441C11.7025 24.157 11.0498 24.157 10.5036 24.4441L7.907 25.8094L8.40287 22.918C8.50712 22.3097 8.3055 21.6891 7.86363 21.2584L5.76275 19.2105L8.666 18.7886Z"
                    fill="#97D80F"
                  />
                  <path
                    d="M43.1317 17.6248C42.8175 18.592 43.0748 19.6339 43.803 20.3438L46.7901 23.2555L46.0849 27.3671C45.913 28.3696 46.3173 29.3636 47.1401 29.9615C47.963 30.5591 49.0334 30.6365 49.9336 30.1634L53.626 28.2221L57.3184 30.1634C57.71 30.3691 58.1336 30.4709 58.5552 30.4709C59.1029 30.4709 59.647 30.2992 60.1119 29.9615C60.9347 29.3636 61.3391 28.3696 61.1671 27.367L60.4619 23.2555L63.449 20.3438C64.1773 19.6339 64.4345 18.592 64.1203 17.6248C63.806 16.6575 62.9856 15.9656 61.9789 15.8193L57.8508 15.2194L56.0045 11.4786C55.5546 10.5665 54.6433 10 53.6261 10C52.609 10 51.6976 10.5665 51.2475 11.4786L49.4014 15.2194L45.273 15.8193C44.2664 15.9656 43.446 16.6575 43.1317 17.6248ZM50.916 18.7886C51.5268 18.6999 52.0546 18.3164 52.3278 17.763L53.6261 15.1322L54.9245 17.763C55.1976 18.3164 55.7256 18.6999 56.3363 18.7886L59.2395 19.2105L57.1386 21.2584C56.6968 21.6891 56.4951 22.3097 56.5994 22.918L57.0953 25.8094L54.4986 24.4441C53.9525 24.157 53.2998 24.157 52.7536 24.4441L50.157 25.8094L50.6529 22.918C50.7571 22.3097 50.5555 21.6891 50.1136 21.2584L48.0128 19.2105L50.916 18.7886Z"
                    fill="#97D80F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9_735">
                    <rect
                      width="64"
                      height="64"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h4>20 Experts</h4>
              <p>Ready to assist in any crypto task.</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="64"
                viewBox="0 0 65 64"
                fill="none"
              >
                <g clip-path="url(#clip0_9_749)">
                  <path
                    d="M64.5 14.4935C64.5 6.50175 57.9982 0 50.0065 0C42.6314 0 36.5255 5.53725 35.627 12.6726H0.5V64H51.8274V28.873C58.9627 27.9746 64.5 21.8686 64.5 14.4935ZM28.0387 36.4613V31.9076C30.7476 31.5531 32.846 29.2299 32.846 26.4259C32.846 23.6219 30.7475 21.2986 28.0387 20.9441V16.4226H35.6416C36.5035 22.8744 41.6256 27.9965 48.0774 28.8584V36.4613H39.8527V39.4899C39.8527 40.4706 39.0549 41.2685 38.0741 41.2685C37.0934 41.2685 36.2955 40.4706 36.2955 39.4899V36.4613H28.0387ZM24.2887 16.4226V24.6472H27.3174C28.2981 24.6472 29.096 25.4451 29.096 26.4259C29.096 27.4066 28.2981 28.2045 27.3174 28.2045H24.2887V36.4613H19.2351C18.8806 33.7524 16.5574 31.654 13.7534 31.654C10.9494 31.654 8.62613 33.7525 8.2715 36.4613H4.25V16.4225L24.2887 16.4226ZM4.25 40.2113H11.9746V37.1826C11.9746 36.2019 12.7725 35.404 13.7533 35.404C14.734 35.404 15.5319 36.2019 15.5319 37.1826V40.2113H24.2886V45.2649C21.5798 45.6194 19.4814 47.9426 19.4814 50.7466C19.4814 53.5506 21.5799 55.8739 24.2886 56.2284V60.25H4.25V40.2113ZM28.0387 60.25V52.5254H25.01C24.0293 52.5254 23.2314 51.7275 23.2314 50.7467C23.2314 49.766 24.0293 48.9681 25.01 48.9681H28.0386V40.2113H32.5923C32.9468 42.9201 35.27 45.0185 38.074 45.0185C40.878 45.0185 43.2013 42.92 43.5558 40.2113H48.0773V60.25H28.0387ZM50.0065 25.237C44.0825 25.237 39.263 20.4175 39.263 14.4935C39.263 8.5695 44.0825 3.75 50.0065 3.75C55.9305 3.75 60.75 8.5695 60.75 14.4935C60.75 20.4175 55.9305 25.237 50.0065 25.237Z"
                    fill="#97D80F"
                  />
                  <path
                    d="M48.6942 14.534L46.2442 12.084L43.5926 14.7356L48.6942 19.8372L56.7595 11.772L54.1079 9.12036L48.6942 14.534Z"
                    fill="#97D80F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9_749">
                    <rect
                      width="64"
                      height="64"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h4>67 Minutes</h4>
              <p>Average time for problem resolution.</p>
            </div>
          </RevealList>
          <RevealWrapper origin="bottom">
            <Link href="#" className="main-button">
              <span>
                Get Started
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
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default HomeLast;
