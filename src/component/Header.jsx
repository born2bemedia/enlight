import React from "react";
import Link from "next/link";
import "@/public/scss/header.scss";
import MobileMenu from "./MobileMenu";

function Header() {
  return (
    <header>
      <div className="_container">
        <div className="head-wrap">
          <Link href="/">
            <img alt="logo" src="/logo.svg" />
          </Link>
          <nav>
            <Link href="/purpose">Purposes</Link>
            <Link href="/services">Services</Link>
            <Link href="#">Resources</Link>
            <Link href="#">Team</Link>
            <Link href="#">Get Started</Link>
            <Link href="#">Contact Us</Link>
          </nav>

          <div className="header-right">
            <Link href="#" className="login">
              Log In
            </Link>

            <MobileMenu/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
