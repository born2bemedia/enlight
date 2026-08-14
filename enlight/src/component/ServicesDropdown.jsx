"use client";

import Link from "next/link";
import React, { useState } from "react";

function ServicesDropdown() {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  return (
    <div
      className={`dropdown-wrap ${dropdownOpened ? "opened" : ""}`}
      onMouseEnter={() => setDropdownOpened(true)}
      onMouseLeave={() => setDropdownOpened(false)}
    >
      <Link href="/services" className="header-nav__link header-nav__link--services">
        Services
        <img
          src="/images/header/chevron-down.svg"
          alt=""
          width={12}
          height={12}
          className="header-nav__chevron"
        />
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
          <Link href="/media-and-platforms">Media and Platforms</Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesDropdown;
