"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileMenu() {
  const [opened, setOpened] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpened(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = opened ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  return (
    <>
      <button
        type="button"
        className="mobile-menu-button"
        aria-label={opened ? "Close menu" : "Open menu"}
        aria-expanded={opened}
        onClick={() => setOpened((v) => !v)}
      >
        <span className="mobile-menu-button__inner">
          {opened ? "Close" : "Menu"}
          <img
            src="/images/header/arrow.svg"
            alt=""
            width={12}
            height={12}
          />
        </span>
      </button>

      <div className={`mobile-menu ${opened ? "opened" : ""}`}>
        <nav className="mobile-menu__nav" aria-label="Mobile">
          <Link href="/purpose">How to start</Link>
          <Link href="/services">Services</Link>
          <div className="services-menu">
            <Link href="/community-building">Community Building</Link>
            <Link href="/search-visibility-and-traffic">
              Search Visibility and Traffic
            </Link>
            <Link href="/reputation-experience-and-expertise">
              Reputation, Experience and Expertise
            </Link>
            <Link href="/branding-solutions">Branding Solutions</Link>
            <Link href="/media-and-platforms">Media and Platforms</Link>
          </div>
          <Link href="/resources">Resources</Link>
          <Link href="/team">Team</Link>
          <Link href="/contact-us">Get Started</Link>
        </nav>
      </div>
    </>
  );
}

export default MobileMenu;
