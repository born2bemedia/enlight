import React from "react";
import Link from "next/link";
import "@/public/scss/header.scss";
import MobileMenu from "./MobileMenu";
import ServicesDropdown from "./ServicesDropdown";

function Header() {
  return (
    <header>
      <div className="_container">
        <div className="head-wrap">
          <Link href="/" className="logo">
            <img src="/logo.svg" alt="Enlight" width={107} height={32} />
          </Link>

          <nav className="header-nav" aria-label="Primary">
            <Link href="/purpose" className="header-nav__link">
              How to start
            </Link>
            <ServicesDropdown />
            <Link href="/resources" className="header-nav__link">
              Resources
            </Link>
            <Link href="/team" className="header-nav__link">
              Team
            </Link>
            <Link href="/contact-us" className="header-nav__link">
              Get Started
            </Link>
          </nav>

          <div className="header-right">
            <Link href="/contact-us" className="header-cta">
              <span className="header-cta__inner">
                Get Started
                <img
                  src="/images/header/arrow.svg"
                  alt=""
                  width={12}
                  height={12}
                />
              </span>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
