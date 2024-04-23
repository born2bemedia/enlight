import React from "react";
import "@/public/scss/footer.scss";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="_container">
        <div className="footer-top">
          <Link href="/">
            <img alt="logo" src="/logo.svg" />
          </Link>
          <nav>
            <Link href="/purpose">Purposes</Link>
            <Link href="/services">Services</Link>
            <Link href="/media-and-platforms">Media and Platforms</Link>
            <Link href="#">Resources</Link>

            <Link href="/team">Team</Link>
            <Link href="#">Contact Us</Link>
          </nav>
          <div className="footer-contacts">
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <g clip-path="url(#clip0_9_808)">
                  <path
                    d="M20.2728 7.98832L12.5008 14.8369L4.7272 7.98822C4.41767 7.71552 3.94586 7.74549 3.67326 8.05482C3.40077 8.36425 3.43044 8.83607 3.73997 9.10876L12.0073 16.3925C12.1484 16.5167 12.3247 16.5788 12.5009 16.5788C12.6772 16.5788 12.8536 16.5167 12.9947 16.3924L21.2603 9.10866C21.5696 8.83607 21.5994 8.36415 21.3268 8.05472C21.054 7.74559 20.5823 7.71572 20.2728 7.98832Z"
                    fill="#97D80F"
                  />
                  <path
                    d="M22.2599 4.81494H2.7401C1.50496 4.81494 0.5 5.8198 0.5 7.05504V18.9029C0.5 20.1381 1.50496 21.143 2.7401 21.143H22.2599C23.495 21.143 24.5 20.1381 24.5 18.9029V7.05504C24.5 5.8199 23.495 4.81494 22.2599 4.81494ZM23.0066 18.9029C23.0066 19.3145 22.6717 19.6496 22.2599 19.6496H2.7401C2.32832 19.6496 1.9934 19.3145 1.9934 18.9029V7.05504C1.9934 6.64336 2.32832 6.30834 2.7401 6.30834H22.2599C22.6717 6.30834 23.0066 6.64336 23.0066 7.05504V18.9029Z"
                    fill="#97D80F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9_808">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5 0.979004)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>Email</span>
            </Link>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M20.6869 4.12296C18.6594 2.09541 15.9635 0.978891 13.0962 0.979004C12.6264 0.979004 12.2457 1.35984 12.2457 1.82958C12.2457 2.29933 12.6265 2.68016 13.0962 2.68016C15.5092 2.68004 17.7777 3.61965 19.484 5.32591C21.1903 7.03216 22.1299 9.30082 22.1298 11.7139C22.1298 12.1836 22.5105 12.5644 22.9804 12.5644C23.4502 12.5644 23.831 12.1836 23.831 11.714C23.8311 8.84639 22.7146 6.15051 20.6869 4.12296Z"
                  fill="#97D80F"
                />
                <path
                  d="M17.188 11.7139C17.188 12.1837 17.5688 12.5645 18.0387 12.5644C18.5084 12.5644 18.8891 12.1835 18.8891 11.7138C18.8889 8.52017 16.2902 5.9216 13.0964 5.92114C13.0962 5.92114 13.0965 5.92114 13.0964 5.92114C12.6266 5.92114 12.2458 6.30186 12.2457 6.77161C12.2457 7.24135 12.6264 7.62218 13.0961 7.6223C15.3522 7.62264 17.1877 9.45807 17.188 11.7139Z"
                  fill="#97D80F"
                />
                <path
                  d="M15.3058 16.0509C14.0093 15.9837 13.3488 16.9479 13.0321 17.4111C12.7668 17.7989 12.8661 18.3281 13.2539 18.5934C13.6416 18.8587 14.1709 18.7593 14.4362 18.3716C14.8105 17.8244 14.98 17.7383 15.21 17.7492C15.9461 17.8357 18.8455 19.9603 19.1358 20.6247C19.2086 20.8203 19.2059 21.0121 19.1278 21.2454C18.8234 22.1488 18.3195 22.7837 17.6703 23.0813C17.0536 23.364 16.2975 23.3384 15.4842 23.0074C12.4474 21.7697 9.79431 20.0423 7.59869 17.8732C7.59778 17.8723 7.59688 17.8715 7.59608 17.8706C5.43153 15.6772 3.70736 13.0275 2.47164 9.99532C2.14059 9.18137 2.11496 8.42515 2.39769 7.80854C2.69528 7.15938 3.33015 6.6555 4.23279 6.35144C4.46687 6.27296 4.6583 6.27047 4.85212 6.3426C5.51886 6.63395 7.64337 9.53317 7.72911 10.261C7.74136 10.4997 7.6546 10.6691 7.10785 11.0427C6.71999 11.3076 6.6203 11.8369 6.88534 12.2247C7.15027 12.6126 7.67944 12.7122 8.06742 12.4472C8.53081 12.1308 9.4948 11.4721 9.42789 10.1712C9.35417 8.81233 6.7108 5.21371 5.44775 4.7493C4.88603 4.53994 4.29516 4.53631 3.69091 4.73909C2.33135 5.19693 1.34944 6.01325 0.851345 7.09973C0.368217 8.15376 0.383528 9.37666 0.896142 10.6369C2.21862 13.8818 4.06891 16.721 6.39552 19.076C6.40119 19.0817 6.40697 19.0874 6.41287 19.093C8.76614 21.4153 11.6021 23.2622 14.8427 24.5831C15.4916 24.847 16.1307 24.9791 16.7418 24.9791C17.3173 24.9791 17.8682 24.862 18.3792 24.6277C19.4658 24.1298 20.282 23.148 20.7402 21.7875C20.9425 21.1844 20.9393 20.5937 20.7315 20.0346C20.2655 18.7682 16.6669 16.1248 15.3058 16.0509Z"
                  fill="#97D80F"
                />
              </svg>
              <span>Phone</span>
            </Link>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <g clip-path="url(#clip0_9_812)">
                  <path
                    d="M12.4997 0.979004C7.40013 0.979004 3.25143 5.12826 3.25143 10.2284C3.25143 13.8727 4.77716 17.559 7.66367 20.8889C9.8196 23.376 11.9562 24.7851 12.0462 24.8439C12.1839 24.934 12.3419 24.979 12.4998 24.979C12.6577 24.979 12.8157 24.934 12.9535 24.8439C13.0434 24.7851 15.1803 23.376 17.3362 20.889C20.223 17.559 21.7488 13.8727 21.7488 10.2284C21.7487 5.12826 17.5995 0.979004 12.4997 0.979004ZM12.4997 23.1319C10.7988 21.8644 4.90959 16.9864 4.90959 10.2284C4.90959 6.04256 8.31444 2.63716 12.4997 2.63716C16.6853 2.63716 20.0905 6.04256 20.0905 10.2284C20.0905 16.9864 14.2008 21.8644 12.4997 23.1319Z"
                    fill="#97D80F"
                  />
                  <path
                    d="M12.5003 6.55591C10.4762 6.55591 8.82956 8.20268 8.82956 10.2269C8.82956 12.2507 10.4762 13.8971 12.5003 13.8971C14.5243 13.8971 16.1709 12.2507 16.1709 10.2269C16.1709 8.20279 14.5242 6.55591 12.5003 6.55591ZM12.5003 12.239C11.3905 12.239 10.4877 11.3364 10.4877 10.2269C10.4877 9.11698 11.3905 8.21406 12.5003 8.21406C13.6099 8.21406 14.5127 9.11698 14.5127 10.2269C14.5127 11.3364 13.6099 12.239 12.5003 12.239Z"
                    fill="#97D80F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9_812">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5 0.979004)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>Address</span>
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
            <nav>
                <Link href="#">Terms and Conditions</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Cookie Policy</Link>
                <Link href="#">Refund Policy</Link>
            </nav>
            <p>All Rights Reserved © Marketera HK</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
