"use client";

import Link from "next/link";
import React, { useState } from "react";

function ServicesDropdown() {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  return (
    <div
      className="dropdown-wrap"
      onMouseEnter={() => setDropdownOpened(true)}
      onMouseLeave={() => setDropdownOpened(false)}
    >
      <Link href="/services">
        Services{" "}
        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" aria-hidden>
          <path
            d="M1.5 1L5.5 5L9.5 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <div className={`service-dropdown ${dropdownOpened ? "opened" : ""}`}>
        <div className="service-dropdown__body">
          <Link href="/community-building">Community Building</Link>
          <Link href="/search-visibility-and-traffic">
            Search Visibility and Traffic
          </Link>
          <Link href="/reputation-experience-and-expertise">
            Reputation, Experience and Expertise
          </Link>
          <Link href="/branding-solutions">Branding Solutions</Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesDropdown;
