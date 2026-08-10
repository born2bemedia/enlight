import React from "react";
import "@/public/scss/footer.scss";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="_container">
        <div className="footer-inner">
          <Link href="/" className="footer-logo">
            <img
              src="/images/footer/logo.png"
              alt="Enlight"
              width={402}
              height={120}
            />
          </Link>

          <div className="footer-content">
            <div className="footer-links">
              <nav className="footer-links__col" aria-label="Primary">
                <Link href="/purpose">How to start</Link>
                <Link href="/services">Services</Link>
                <Link href="/resources">Resources</Link>
                <Link href="/contact-us">Get Started</Link>
              </nav>
              <nav className="footer-links__col" aria-label="Company">
                <Link href="/purpose">About Us</Link>
                <Link href="/contact-us">Contact Us</Link>
                <Link href="/team">Team</Link>
              </nav>
              <nav className="footer-links__col" aria-label="Legal">
                <Link href="/terms-of-service">Terms and Conditions</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/cookie-policy">Cookie Policy</Link>
              </nav>
            </div>

            <div className="footer-divider" aria-hidden="true" />

            <div className="footer-meta">
              <div className="footer-contacts">
                <a
                  className="footer-contact"
                  href="mailto:info@enlight.business"
                >
                  <img
                    src="/images/footer/email.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <span>info@enlight.business</span>
                </a>
                <a className="footer-contact" href="tel:+447458149408">
                  <img
                    src="/images/footer/phone.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <span>+44 745 814 94 08</span>
                </a>
              </div>

              <div className="footer-addresses">
                <div className="footer-address">
                  <img
                    src="/images/footer/pin.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p>
                    <strong>Registered address:</strong>
                    <br />
                    Rooms 1703-1704, 17/F, Tung Chiu Commercial Centre, 193
                    Lockhart Road, Wanchai, Hong Kong
                  </p>
                </div>
                <div className="footer-address">
                  <img
                    src="/images/footer/pin.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p>
                    <strong>Operational address:</strong>
                    <br />
                    138 Gloucester Rd, Wan Chai, Hong Kong
                  </p>
                </div>
              </div>
            </div>

            <p className="footer-copy">All Rights Reserved © Marketera HK</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
