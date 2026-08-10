import React from "react";
import "@/public/scss/footer.scss";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="_container">
        <div className="footer-top">
          <div className="foter-left">
            <Link href="/" className="logo">
              Enlight
            </Link>
            <div className="soc">
              <Link
                href="https://www.facebook.com/enlight.facebook"
                target="_blank"
              >
                Facebook
              </Link>
              <Link
                href="https://www.linkedin.com/company/enlight-linkedin/"
                target="_blank"
              >
                LinkedIn
              </Link>
            </div>
          </div>

          <nav>
            <Link href="/purpose">Purposes</Link>
            <Link href="/services">Services</Link>
            <Link href="/media-and-platforms">Media and Platforms</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/team">Team</Link>
            <Link href="/contact-us">Contact Us</Link>
          </nav>

          <div className="footer-contacts">
            <Link href="mailto:info@enlight.business">
              info@enlight.business
            </Link>
            <Link href="tel:+447458149408">+44 7458 149408</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <Link href="/privacy-policy">Privacy Policy</Link>
          {" · "}
          <Link href="/cookie-policy">Cookie Policy</Link>
          {" · "}
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
