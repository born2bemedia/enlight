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

  return (
    <>
      <button
        type="button"
        className="mobile-menu-button"
        aria-label={opened ? "Close menu" : "Open menu"}
        onClick={() => setOpened((v) => !v)}
      >
        {opened ? "Close" : "Menu"}
      </button>
      <div className={`mobile-menu ${opened ? "opened" : ""}`}>
        <Link href="/purpose">Purposes</Link>
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
        </div>
        <Link href="/media-and-platforms">Media and Platforms</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/team">Team</Link>
        <Link href="/contact-us">Contact Us</Link>
        <Link href="/login">Log In</Link>
      </div>
    </>
  );
}

export default MobileMenu;
